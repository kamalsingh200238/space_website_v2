import type { AppProps } from "next/app";
import "@/styles/globals.css";
import Layout from "@/components/Layout";
import { Barlow, Barlow_Condensed, Bellefair } from "@next/font/google";

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

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div
      className={`${barlow.variable} ${barlowCondensed.variable} ${bellefair.variable}`}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
