// pages/_app.js
import '../styles/globals.css';
import '../styles/icons.css';
import { SpeedInsights } from '@vercel/speed-insights/next';

function MyApp({ Component, pageProps }) {

  return (
    <div className='flex flex-col'>
      <Component {...pageProps} />
      <SpeedInsights />
    </div>
  );
}

export default MyApp;
