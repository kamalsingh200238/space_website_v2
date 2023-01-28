import { useEffect, useRef } from "react";

export default function useClickOutsideToClose(handler: () => void) {
  const domNode = useRef<HTMLDivElement>(null!);

  function handleClick(e: TouchEvent | MouseEvent) {
    if (!domNode.current?.contains(e.target as Node)) {
      handler();
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("touchstart", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("touchstart", handleClick);
    };
  });

  return domNode;
}
