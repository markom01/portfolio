import React, { useEffect, useState } from "react";

export default function Scrollbar({
  container,
}: {
  container: React.RefObject<HTMLDivElement>;
}) {
  const [scrolled, setScrolled] = useState(0);
  let scrollTop;
  let target;
  let targetHeight;
  const handleScroll = (e: { currentTarget: any }) => {
    target = e.currentTarget;
    targetHeight = target.scrollHeight - target.clientHeight;
    scrollTop = target.scrollTop;
    setScrolled(scrollTop / targetHeight);
  };
  useEffect(() => {
    container.current.onscroll = handleScroll;
  }, [scrolled]);
  return (
    <progress className="w-100 bg-transparent border-0" value={scrolled} />
  );
}
