import '../styles/index.css'
import Context from '../context/heroesContext';

function MyApp({ Component, pageProps }) {
  return (
    <Context>
      <Component {...pageProps} />
      <div className='orangeLine mt-12 mx-auto'/>
    </Context>
  )
}

export default MyApp
