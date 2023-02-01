import useClickOutsideToClose from "@/lib/hooks/useClickOutsideToClose";
import useIsScrolledToTop from "@/lib/hooks/useIsScrolledToTop";
import useScorllDirection from "@/lib/hooks/useScrollDirection";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navbarLinks = [
  {
    link: "/",
    displayText: "Home",
  },
  {
    link: "/destination",
    displayText: "Destination",
  },
  {
    link: "/crew",
    displayText: "Crew",
  },
  {
    link: "/technology",
    displayText: "Technology",
  },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const domNode = useClickOutsideToClose(closeMenu);
  const scrollDirection = useScorllDirection();
  const isScrolledToTop = useIsScrolledToTop();

  const pathName = usePathname();

  function closeMenu() {
    setIsMenuOpen(false);
  }

  function toggleMenu() {
    setIsMenuOpen((prev) => !prev);
  }

  // this function converts 1 => 01 or 2 => 02
  const addZeroInFront = (index: Number): String => {
    return String("0" + index).slice(-2);
  };

  useEffect(() => {
    if (window.innerWidth < 768) {
      // toggle classes when isMenuOpen is true
      document.body.classList.toggle("max-md:overflow-hidden", isMenuOpen);
      document
        ?.getElementById("content")
        ?.classList.toggle("max-md:blur-sm", isMenuOpen);
    }
  }, [isMenuOpen]);

  return (
    <header
      className={`${
        isScrolledToTop ? "h-24" : "h-16 bg-primary-500/20 backdrop-blur-lg"
      } ${scrollDirection === "up" && !isScrolledToTop ? "top-0" : ""} ${
        scrollDirection === "down" && !isScrolledToTop ? "-top-full" : ""
      } fixed top-0 z-30 flex w-screen items-center justify-between px-6 font-barlow-condensed text-lg tracking-widest text-white lg:px-12 transition-all duration-200`}
    >
      {/*main logo*/}
      <Link
        href={"/"}
        className="focus-visible:outline-none focus-visible:ring focus-visible:ring-white"
      >
        <div className="relative aspect-square w-10 md:w-12">
          <Image
            src={"/shared/logo.svg"}
            alt={"Main logo"}
            fill={true}
            className=""
          />
          <span className="sr-only">link will take you to home page</span>
        </div>
      </Link>

      <div ref={domNode} className="max-md:h-10">
        <button
          className="relative z-50 h-10 w-10 focus-visible:outline-none focus-visible:ring focus-visible:ring-white md:hidden"
          onClick={toggleMenu}
        >
          <svg
            className={`${
              isMenuOpen ? "rotate-180" : ""
            } z-50 h-full w-full transition-all duration-200`}
            viewBox="0 0 148 139"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              className={`${
                isMenuOpen ? "rotate-45" : ""
              } origin-center transition-all duration-200`}
              x="18"
              y={isMenuOpen ? "62" : "27"} // for better animations
              width="112"
              height="10"
              rx="5"
            />
            <rect
              className={`${
                isMenuOpen ? "opacity-0" : "opacity-100"
              } transition-all duration-200`}
              x="18"
              y="62"
              width="112"
              height="10"
              rx="5"
            />
            <rect
              className={`${
                isMenuOpen ? "-rotate-45" : ""
              } origin-center transition-all duration-200`}
              x="18"
              y={isMenuOpen ? "62" : "97"} // for better animations
              width="112"
              height="10"
              rx="5"
            />
          </svg>
        </button>
        <nav
          className={`${
            isMenuOpen ? "max-md:translate-x-0" : "max-md:translate-x-full"
          } max-md z-40 grid place-items-center transition-all duration-200 max-md:fixed max-md:inset-y-0 max-md:right-0 max-md:h-screen max-md:w-3/4 max-md:max-w-sm max-md:bg-primary-500`}
        >
          <ul className="flex justify-between gap-8 max-md:flex-col max-md:items-start md:items-center lg:gap-12">
            {navbarLinks.map((item, index) => {
              return (
                <li key={item.link} className="relative">
                  <Link
                    href={item.link}
                    className={`shadow-border-b inline-block transition-all duration-200 md:py-8`}
                  >
                    <span className="mr-3 font-bold">
                      {addZeroInFront(index)}
                    </span>
                    <span className="uppercase">{item.displayText}</span>
                  </Link>
                  <div
                    className={`absolute bottom-0 h-0.5 w-full bg-white ${
                      pathName === item.link ? "opacity-100" : "opacity-0"
                    }`}
                  ></div>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
