import Heading from "@/components/Heading";
import Image from "next/image";

import { Data } from "@/lib/types/Data";
import { Splide, SplideSlide } from "@splidejs/react-splide";
// import "@splidejs/react-splide/css";
// import "@splidejs/react-splide/css/sea-green";

import fsPromises from "fs/promises";
import path from "path";
import { useState } from "react";
export async function getStaticProps() {
  // get the path
  const dataPath = path.join(process.cwd(), "lib/data/data.json");
  // read the file
  const resp = await fsPromises.readFile(dataPath);
  const data = JSON.parse(resp.toString()) as Data;

  return {
    props: {
      crewData: data.crew,
    },
  };
}

interface Props {
  crewData: Data["crew"];
}

export default function Crew({ crewData }: Props) {
  //todo write the logic to change the data when slide moves
  const [count, setCount] = useState(0);
  const activeCrew = crewData[count];

  function handleSlideChange(id: number) {
    // change the count to the number received
    setCount(id);
  }

  return (
    <div className="min-h-screen bg-primary-500 text-white">
      <div
        id="content"
        className="bg-crew-mobile bg-cover bg-no-repeat md:bg-crew-tablet lg:bg-crew-desktop"
      >
        <main className="">
          <section className="hero-size grid justify-center px-6 py-28 md:px-40 md:py-52">
            <div className="max-w-5xl">
              <Heading headingNumber="02" headingText="meet your crew" />
              <div className="grid place-items-center gap-20 lg:grid-cols-2 lg:gap-56">
                <div className="aspect-square w-56 md:w-144 lg:order-1 lg:w-104">
                  <Splide
                    onActive={(_splide, slide) => {
                      // when active slide changes call the function to change the value of count
                      handleSlideChange(slide.index);
                    }}
                    options={{
                      rewind: true,
                      gap: "3rem",
                    }}
                  >
                    {crewData.map((singleCrew, index) => {
                      return (
                        <SplideSlide key={index}>
                          <div className="relative aspect-square w-full">
                            <Image
                              src={singleCrew.images.webp}
                              alt={`${singleCrew.name} image`}
                              className="object-contain"
                              fill={true}
                            />
                          </div>
                        </SplideSlide>
                      );
                    })}
                  </Splide>
                </div>
                <div className="text-center lg:text-left">
                  <div>
                    <p className="mb-2 font-bellefair md:text-2xl lg:text-4xl">
                      {activeCrew.role}
                    </p>
                  </div>
                  <div>
                    <p className="mb-4 font-bellefair text-2xl md:text-4xl lg:text-6xl">
                      {activeCrew.name}
                    </p>
                  </div>
                  <div>
                    <p className="min-h-[10rem] font-barlow lg:text-lg">
                      {activeCrew.bio}
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
              left: -150%;
            }
          }
        `}
      </style>
    </div>
  );
}
