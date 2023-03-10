import fsPromises from "fs/promises";
import path from "path";
import { Data } from "@/lib/types/Data";
import Image from "next/image";
import { useEffect, useState } from "react";
import Heading from "@/components/Heading";

export async function getStaticProps() {
  // get the path
  const dataPath = path.join(process.cwd(), "lib/data/data.json");

  // read the data
  const resp = await fsPromises.readFile(dataPath);
  const objectData = JSON.parse(resp.toString()) as Data;

  return {
    props: {
      destinationData: objectData.destinations,
    },
  };
}

export default function Destination({
  destinationData,
}: {
  destinationData: Data["destinations"];
}) {
  const [count, setCount] = useState(0);
  const activeDestination = destinationData[count];

  function handleButtonClick(index: number) {
    setCount(index);
  }

  function handleKeyDown(e: KeyboardEvent) {
    if (e.key === "ArrowLeft") {
      setCount((prev) => (prev === 0 ? prev : prev - 1));
    } else if (e.key === "ArrowRight") {
      setCount((prev) =>
        prev === destinationData.length - 1 ? prev : prev + 1
      );
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.addEventListener("keydown", handleKeyDown);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="min-h-screen bg-primary-500 text-white">
      <div
        id="content"
        className="bg-destination-mobile bg-cover bg-no-repeat md:bg-destination-tablet lg:bg-destination-desktop"
      >
        <main className="">
          <section className="hero-size grid justify-center px-6 py-28 md:px-40 md:py-52">
            <div className="max-w-5xl">
              <Heading headingNumber="01" headingText="Pick your destination" />
              <div className="grid items-start gap-6 md:gap-14 lg:grid-cols-2 lg:gap-40">
                <div className="relative aspect-square w-44 justify-self-center md:w-72 lg:w-120">
                  <Image
                    src={activeDestination.images.webp}
                    alt={`${activeDestination.name} image`}
                    fill={true}
                  />
                </div>
                <div className="text-center lg:text-left">
                  <div className="mb-5 flex justify-center gap-7 md:mb-8 md:gap-9 lg:mb-9 lg:justify-start">
                    {destinationData.map((destination, index) => {
                      return (
                        <button
                          key={destination.name}
                          onClick={() => {
                            handleButtonClick(index);
                          }}
                          className={`${
                            activeDestination.name === destination.name
                              ? "border-b-2"
                              : "border-b-2 border-transparent"
                          } pb-2 transition-all duration-200 hover:border-b-white/50`}
                        >
                          {destination.name}
                        </button>
                      );
                    })}
                  </div>
                  <div>
                    <h2 className="mb-6 font-bellefair text-6xl md:text-7xl lg:text-8xl">
                      {activeDestination.name}
                    </h2>
                  </div>
                  <div>
                    <p className="mb-8 max-w-lg font-barlow text-seconday-500 md:mb-12 lg:text-lg">
                      {activeDestination.description}
                    </p>
                  </div>
                  <div className="flex flex-col justify-center gap-8 border-t border-t-white/25 py-8 md:flex-row md:gap-24 lg:justify-start">
                    <div className="">
                      <p className="mb-3 font-barlow-condensed uppercase tracking-widest text-seconday-500">
                        avg. distance
                      </p>
                      <p className="font-bellefair text-3xl">
                        {activeDestination.distance}
                      </p>
                    </div>
                    <div>
                      <p className="mb-3 font-barlow-condensed uppercase tracking-widest text-seconday-500">
                        est. travel time
                      </p>
                      <p className="font-bellefair text-3xl">
                        {activeDestination.travel}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
