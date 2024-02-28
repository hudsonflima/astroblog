// pages/_app.js
import '../styles/globals.css';
import '../styles/icons.css';

function MyApp({ Component, pageProps }) {

  return (
    <div className='flex flex-col'>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
