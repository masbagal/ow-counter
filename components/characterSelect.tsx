import { useHeroes } from '../context/heroesContext';
import Photo from './photo';

export default function CharaSelect() {
  const heroes = useHeroes();
  return (
    <div className='flex flex-wrap justify-center'>
    {
      heroes.map((hero: any) => (
        <Photo name={hero.name} key={hero.name} />
      ))
    }
    </div>
  )
}