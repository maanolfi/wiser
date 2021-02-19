import Head from 'next/head'

export default function Layout({
  children,  
}) {
  return (
    <>
      <Head>
        <title>Wiser</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;600&display=swap" rel="stylesheet" />
      </Head>     

      {children}
      
    </>
  )
}