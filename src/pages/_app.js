import Head from 'next/head';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';
import CookieConsent from '../components/CookieConsent';
import '../styles/global.css';
import './../styles/tailwind.css';

function MyApp({ Component, pageProps }) {
  const initialState = useInitialState();

  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      window.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
        page_path: url,
      });
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <AppContext.Provider value={initialState}>
        <Head>
          <title>BenjaSaldao.com - Desarrollo web</title>
          <link rel="icon" href="/logoBenjaSaldao.ico" />
          <meta name="description" content="Mi nombre es Benjamin Saldaño y soy desarrollador web" />
        </Head>
        <Layout>
          <Component {...pageProps} />
          <CookieConsent />
        </Layout>
      </AppContext.Provider>
    </>
  );
}

export default MyApp;
