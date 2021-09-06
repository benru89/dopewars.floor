import 'tailwindcss/tailwind.css'
import Head from 'next/head'
function Robes({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <style jsx global>
        {`
          body {
            background: #000000e0;
            color: white;
            overflow-x: hidden;
          }
        `}
      </style>
      <Head>
        <title>dopewars.floor</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:url" content="https://dopewars.floor" />
        <meta property="og:title" content="dopewars.floor" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <meta
          property="og:description"
          content="See the floor price of gear from the Dope Wars project."
        />
        <meta property="og:image" content="https://imgur.com/a/5TtxFqM" />
      </Head>
    </>
  )
}

export default Robes
