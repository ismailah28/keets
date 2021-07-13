import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <link rel='shortcut icon' href='/favicon/favicon.ico' />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/favicon/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon/favicon-16x16.png'
        />
        <title>KEETS Board</title>
      </Head>
      <h1>KEETS</h1>
    </>
  );
}
