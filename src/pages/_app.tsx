import React, { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
