import '../styles/index.css';
import { useEffect } from 'react';
import Context from '../context/heroesContext';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", "UA-60704805-5");
  }, []);

  return (
    <Context>
      <Component {...pageProps} />
      <div className='orangeLine mt-12 mx-auto'/>
      <footer className='text-center text-gray-500 underline text-xs'>
        <a href='https://github.com/masbagal/ow-counter' rel='noreferrer noopener'>GitHub Source</a>
      </footer>
    </Context>
  )
}

export default MyApp
