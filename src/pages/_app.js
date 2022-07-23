import Head from 'next/head';
import Layout from '../components/Layout';
import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';
import './../styles/tailwind.css';

function MyApp({ Component, pageProps }) {
  const initialState = useInitialState();
  return (
    <>
      <AppContext.Provider value={initialState}>
        <Head>
          <title>BenjaSaldao.com</title>
          <link rel="icon" href="/logoBenjaSaldao.ico" />
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AppContext.Provider>
    </>
  );
}

export default MyApp;
