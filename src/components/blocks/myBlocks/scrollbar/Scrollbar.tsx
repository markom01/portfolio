import React, { useEffect, useRef, useState } from "react";

export default function Scrollbar({ container }: { container: any }) {
  const [scrolled, setScrolled] = useState(0);
  let scrollTop;
  let target;
  let targetHeight;
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    target = e.currentTarget;
    targetHeight = target.scrollHeight - target.clientHeight;
    scrollTop = target.scrollTop;
    setScrolled(scrollTop / targetHeight);
  };
  useEffect(() => {
    container.current.onscroll = handleScroll;
  }, []);
  return (
    <progress className="w-100 bg-transparent border-0" value={scrolled} />
  );
}
