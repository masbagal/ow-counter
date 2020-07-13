import React, { useContext } from 'react';
import { useQuery } from 'react-query'

export const HeroesContext = React.createContext(null);
export const ActionContext = React.createContext(null);

export default function HeroesContextWrapper(props) {
  const { data } = useQuery('heroesData', () =>
     fetch('/api/heroes').then(res =>
       res.json()
     )
   )
  
   const heroes = data && data.heroes || [];
   const counters = data && data.counters || [];

   function getHeroes() {
     return heroes.map(hero => ({
       name: hero.name,
       displayName: hero.displayName
     }))
   }

   function getHero(name) {
     return heroes.find(hero => hero.name === name);
   }

   function getCounters(name) {
     const heroCounter = counters.find(hero => hero.name === name.toUpperCase());
     return heroCounter ? heroCounter.map : {};
   }

   const actions = {
     getHeroes,
     getHero,
     getCounters
   }

   return (
    <HeroesContext.Provider value={heroes}>
      <ActionContext.Provider value={actions}>
        {props.children}
      </ActionContext.Provider>
    </HeroesContext.Provider>
   )
}

export function useHeroes() {
  return useContext(HeroesContext);
}

export function useDataAction() {
  return useContext(ActionContext);
}