import Head from 'next/head';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import CookieConsent from 'react-cookie-consent';
import Layout from '../components/Layout';
import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';
import '../styles/global.css';
import './../styles/tailwind.css';
import Link from 'next/link';

function MyApp({ Component, pageProps }) {
  const initialState = useInitialState();

  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      window.gtag('config', process.env.GOOGLE_ANALYTICS, {
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
          <meta name="description" content="Mi nombre es Benja Saldaño y soy desarrollador web" />
        </Head>
        <Layout>
          <Component {...pageProps} />
          <CookieConsent
            location="bottom"
            buttonText="Estoy de acuerdo"
            onAccept={() => location.reload()}
            cookieName="CookieConsent"
            expires={150}
            enableDeclineButton="true"
            declineButtonText="No quiero utilizar cookies"
          >
            Este sitio web utiliza cookies en busca de mejorar la experiencia de usuario
            <Link href="/cookies">Política de Cookies</Link>.
          </CookieConsent>
        </Layout>
      </AppContext.Provider>
    </>
  );
}

export default MyApp;
