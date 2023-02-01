import { useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Data } from "@/lib/types/Data";
import Heading from "@/components/Heading";
import Image from "next/image";

import fsPromises from "fs/promises";
import path from "path";
import useWindowDimensions from "@/lib/hooks/useWindowDimensions";
export async function getStaticProps() {
  // get the path of json file
  const dataPath = path.join(process.cwd(), "lib/data/data.json");
  // read from json file
  const resp = await fsPromises.readFile(dataPath);
  const data = JSON.parse(resp.toString()) as Data;

  return {
    props: {
      techData: data.technology,
    },
  };
}

export default function Technology({
  techData,
}: {
  techData: Data["technology"];
}) {
  //todo write the logic to change the data when slide moves
  const [count, setCount] = useState(0);
  const activeTech = techData[count];
  const { width, height } = useWindowDimensions();

  function handleSlideChange(id: number) {
    // change the count to the number received
    setCount(id);
  }

  return (
    <div className="min-h-screen bg-primary-500 text-white">
      <div
        id="content"
        className="bg-technology-mobile bg-cover bg-no-repeat md:bg-technology-tablet lg:bg-technology-desktop"
      >
        <main className="">
          <section className="hero-size grid justify-center py-28 md:px-40 md:py-52">
            <div className="max-w-5xl">
              <Heading headingNumber="03" headingText="space launch 101" />
              <div className="grid place-items-center gap-20 lg:grid-cols-2 lg:gap-40">
                <div className="w-full lg:order-1">
                  <Splide
                    onActive={(_splide, slide) => {
                      // when active slide changes call the function to change the value of count
                      handleSlideChange(slide.index);
                    }}
                    options={{
                      rewind: true,
                      keyboard: "global",
                      gap: "3rem",
                    }}
                  >
                    {techData.map((singeleTech, index) => {
                      return (
                        <SplideSlide key={index}>
                          <div className="relative aspect-video w-full lg:aspect-square">
                            <Image
                              src={
                                width < 1024
                                  ? singeleTech.images.landscape
                                  : singeleTech.images.portrait
                              }
                              alt={`${singeleTech.name} image`}
                              className="object-cover lg:object-contain"
                              fill={true}
                            />
                          </div>
                        </SplideSlide>
                      );
                    })}
                  </Splide>
                </div>
                <div className="px-6 text-center lg:text-left">
                  <div>
                    <p className="mb-2 font-barlow-condensed uppercase tracking-widest md:mb-4 ">
                      the terminology...
                    </p>
                  </div>
                  <div>
                    <p className="mb-4 font-bellefair text-2xl uppercase md:text-4xl lg:text-6xl">
                      {activeTech.name}
                    </p>
                  </div>
                  <div>
                    <p className="min-h-[10rem] font-barlow lg:text-lg">
                      {activeTech.description}
                      {/* {activeTech.bio} */}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
      <style jsx global>
        {`
          .splide {
            padding: 0;
          }
          .splide__pagination {
            bottom: -2em;
          }
          @media (min-width: 1024px) {
            .splide__pagination {
              bottom: -4em;
              left: -135%;
            }
          }
        `}
      </style>
    </div>
  );
}
