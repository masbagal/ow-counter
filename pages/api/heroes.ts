import heroes from '../../data/heroes.json';
import counters from '../../data/counter.json';

export default (req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify({ heroes, counters }))
}