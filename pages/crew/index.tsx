import Heading from "@/components/Heading";
import Image from "next/image";

import { Data } from "@/lib/types/Data";

import fsPromises from "fs/promises";
import path from "path";
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
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
