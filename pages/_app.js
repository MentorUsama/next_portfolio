// import '../styles/reset.css'
import '../styles/globals.scss'
import Head from 'next/head'
import { ThemeProvider } from '../context';
function MyApp({ Component, pageProps }) {
  return (<>
    <Head>
      <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="description" content="Hire professional frontend developer and designer." />
      <meta name="author" content="Muhammad Usama" />
      <link rel="icon" type="image/x-icon" href={"/images/icon.ico"} />
      {/* Fonts Import */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <title>Muhammad Usama</title>
    </Head>
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  </>
  )
}

export default MyApp
