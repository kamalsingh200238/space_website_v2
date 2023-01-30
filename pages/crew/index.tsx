import Heading from "@/components/Heading";
import Image from "next/image";

export default function Crew() {
  return (
    <div className="min-h-screen bg-primary-500 text-white">
      <div
        id="content"
        className="bg-destination-mobile bg-cover bg-no-repeat md:bg-destination-tablet lg:bg-destination-desktop"
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
