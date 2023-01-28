import Head from "next/head";
import { Barlow, Barlow_Condensed, Bellefair } from "@next/font/google";
import Navbar from "@/components/Navbar";

const barlow = Barlow({
  subsets: ["latin"],
  variable: "--barlow-font",
  weight: ["400", "700"],
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  variable: "--barlow-condensed-font",
  weight: ["400", "700"],
});

const bellefair = Bellefair({
  subsets: ["latin"],
  variable: "--bellefair-font",
  weight: ["400"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Space Website</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <div
        className={`min-h-screen bg-primary-500 text-white ${barlow.variable} ${barlowCondensed.variable} ${bellefair.variable}`}
      >
        <Navbar />
      </div>
    </>
  );
}
