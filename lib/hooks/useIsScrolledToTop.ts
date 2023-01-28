import { useEffect, useState } from "react";

export default function useIsScrolledToTop() {
  const [isScrolledToTop, setIsScrolledToTop] = useState(true);

  function handleScroll() {
    if (typeof window !== "undefined") {
      // check scrollY position
      // if it is zero scrolledToTop becomes ture
      // if it is not zero scrolledToTop becomes false
      setIsScrolledToTop(window.scrollY === 0);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return isScrolledToTop;
}
