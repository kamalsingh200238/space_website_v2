import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Space Website</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <main className="text-rose-500">Howdy</main>
    </>
  );
}
