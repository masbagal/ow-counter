import Link from 'next/link';

export default function Photo({ name, spacing }) {
  return (
    <Link href='/hero/[heroName]' passHref as={`/hero/${name.toLowerCase()}`}>
      <a className='photolink' aria-label={`Link for opening hero detail for ${name}`} style={{ marginLeft: spacing, marginRight: spacing }}>
        <div className='w-24 h-24 photo'>
          <img src={`/img/face/${name}.png`} />
        </div>
      <div className='name'>{name}</div>
      </a>
    </Link>
  )
}