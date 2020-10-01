import '../scss/styles.scss';
import Head from 'next/head';

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Next JS Setup</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;
