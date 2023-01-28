import Head from "next/head";
import { Barlow, Barlow_Condensed, Bellefair } from "@next/font/google";
import Navbar from "@/components/Navbar";
import Link from "next/link";

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
        <div
          id="content"
          className="bg-home-mobile bg-cover bg-no-repeat md:bg-home-tablet lg:bg-home-desktop"
        >
          <main className="content">
            <section className="hero-size grid place-items-center px-6 py-24 md:px-40 md:py-52">
              <div className="max-w-5xl">
                <div className="grid gap-20 text-center md:gap-36 lg:grid-cols-2">
                  <div>
                    <div>
                      <p className="mb-5 font-barlow-condensed uppercase tracking-widest md:mb-6 md:text-xl">
                        so, you want to trave to
                      </p>
                    </div>
                    <div>
                      <h1 className="mb-11 font-bellefair text-7xl uppercase md:mb-14 md:text-9xl">
                        space
                      </h1>
                    </div>
                    <div>
                      <p className="max-w-md font-barlow lg:text-lg">
                        Let’s face it; if you want to go to space, you might as
                        well genuinely go to outer space and not hover kind of
                        on the edge of it. Well sit back, and relax because
                        we’ll give you a truly out of this world experience!
                      </p>
                    </div>
                  </div>
                  <div className="mx-auto lg:self-end">
                    <Link
                      href={"/destination"}
                      className="grid aspect-square w-36 place-items-center rounded-full bg-white font-bellefair text-xl uppercase text-primary-500 transition-all duration-200 hover:scale-105 focus:outline-none focus:ring focus:ring-blue-500 md:w-60 md:text-3xl lg:w-72"
                    >
                      Explore
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
}
