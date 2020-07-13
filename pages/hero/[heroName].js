import Link from 'next/link';
import { useDataAction } from '../../context/heroesContext';
import Photo from '../../components/photo';

function CounterMap({ counters = {}, type, title }) {
  const isPopulated = counters && Object.entries(counters).length > 0;
  return isPopulated ? (
    <>
    <h3 className={type}>{title}</h3>
    <div className='flex flex-wrap justify-center md:justify-start'>
      { counters.map(counter => {
        return (
          <Photo name={counter} key={counter} spacing='0.1ch' />
        )
      })}
    </div>
    </>
  ) : null;
}

function HeroDetail({ heroName }) {
  const actions = useDataAction(); 
  const hero = actions.getHero(heroName) || {};
  const counterMap = actions.getCounters(heroName) || {};

   const displayName = hero && hero.displayName || heroName;
   const desc = hero && hero.desc || '';

   const { verygood, good, weak, veryweak } = counterMap;

  return (
    <>
      <div className='heroWrapper'>
        <div className='hero'>
          <div className='container md:w-6/12 flex mx-auto justify-center md:justify-end relative'>
            <div className='bodypic'>
              <img src={`/img/full/${heroName}.png`} />
            </div>
            <h1 className='displayName whitespace-normal md:whitespace-no-wrap'>{displayName}</h1>
          </div>
          <div className='heroBottomShadow' />
        </div>
        <div className='backLink'>
          <Link href='/' passHref>
            <a aria-label='Link for going back to home page'>
              {'<'}
            </a>
          </Link>
        </div>
      </div>

      <div id='heroDetail' className='container md:w-6/12 mx-auto text-white text-center md:text-left text-lg px-4 md:pl-0 mt-2'>
        <div className='orangeLine' />
        <p>{desc}</p>

        <h2>{heroName} HERO COUNTER</h2>
        <div className='orangeLine sm' />
        <CounterMap counters={verygood} type='text-green-200' title='Super Effective Against' />
        <CounterMap counters={good} type='text-green-500' title='Good Against' />
        <CounterMap counters={weak} type='text-red-400' title='Ineffective Against' />
        <CounterMap counters={veryweak} type='text-red-600' title='Weak Against' />
      </div>
    </>
  )
}

HeroDetail.getInitialProps = async (ctx) => {
  return {
    heroName: ctx.query.heroName
  }
}

export default HeroDetail;