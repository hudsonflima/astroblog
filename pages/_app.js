// pages/_app.js

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import '../styles/globals.css';
import '../styles/icons.css';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const handleStart = () => {
      setIsTransitioning(true);
    };

    const handleComplete = () => {
      setIsTransitioning(false);
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router]);

  return (
    <div className={isTransitioning ? 'page-transitioning star' : ''}>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
