import '../styles/globals.scss'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (<>
    <Head>
      <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="description" content="Hire professional frontend developer and designer." />
      <meta name="author" content="Muhammad Usama" />
      <link rel="icon" type="image/x-icon" href={"/images/icon.ico"} />
      <title>Muhammad Usama</title>
    </Head>
    <Component {...pageProps} />
  </>
  )
}

export default MyApp
