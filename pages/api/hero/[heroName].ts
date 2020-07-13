import heroes from '../../../data/heroes.json';

export default (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json')
  const {
    query: { heroName },
  } = req
  const hero = heroes.find(hero => ( hero.name === heroName ))
  res.end(JSON.stringify(hero))
}