import { useEffect, useState } from "react";

export default function useScorllDirection() {
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("down");
  const [prevScrollY, setPrevScrollY] = useState<Number>(0);

  function handleScroll() {
    if (typeof window !== "undefined") {
      //create variable containing current scrollY
      const currentScrollY = window.scrollY;

      //check if currentScrollY is greater than prevScrollY
      if (currentScrollY > prevScrollY) {
        //if true then user scrolled down so change the scrollDirection
        setScrollDirection("down");
      } else {
        //if false then user scrolled up so change the scrollDirection
        setScrollDirection("up");
      }

      // at last change setPrevScrollY
      setPrevScrollY(currentScrollY);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prevScrollY]);

  return scrollDirection;
}
