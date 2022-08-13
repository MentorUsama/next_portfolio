import '../styles/globals.scss'
import Head from 'next/head'
import { ThemeProvider } from '../context';
import {useState} from 'react'
function MyApp({ Component, pageProps }) {
  const [mode,setMode]=useState("light")
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
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;500;600;700&family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet" />
      <title>Muhammad Usama</title>
    </Head>
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  </>
  )
}

export default MyApp
