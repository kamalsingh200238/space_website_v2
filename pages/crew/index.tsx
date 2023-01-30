import Heading from "@/components/Heading";
import Image from "next/image";

export default function Crew() {
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
  )
}
