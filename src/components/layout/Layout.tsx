import React, { useRef, useState } from "react";

import Scrollbar from "@myBlocks/scrollbar/Scrollbar";

import Navigation from "@sections/navigation/Navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [scrolled, setScrolled] = useState(0);
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    const scrollTop = target.scrollTop;
    const targetHeight = target.scrollHeight - target.clientHeight;
    setScrolled(scrollTop / targetHeight);
  };
  return (
    <div
      className="w-100 d-flex flex-column"
      style={{ zIndex: 2, position: "relative", height: "99vh" }}
    >
      <Scrollbar progress={scrolled} />
      <div className={`w-100 h-100 pt-3 d-flex`} id="main">
        <Navigation />
        <div
          className="glass mx-2  px-3  h-100 text-center"
          id="content"
          onScroll={handleScroll}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
