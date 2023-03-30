import { Script } from "gatsby";
import React, { useEffect, useRef } from "react";

import Scrollbar from "@myBlocks/scrollbar/Scrollbar";

import Navigation from "@sections/navigation/Navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    videoRef.current.playbackRate = 0.5;
  }, []);

  return (
    <>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-LPZCYXK5HV" />
      <Script id="gtag">
        {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments)}
  gtag('js', new Date());

  gtag('config', 'G-LPZCYXK5HV')`}
      </Script>
      <video ref={videoRef} src="bg-triangles-small.mp4" autoPlay muted loop />
      <div
        className="w-100 d-flex flex-column"
        style={{ zIndex: 2, position: "relative", height: "99vh" }}
      >
        <Scrollbar container={ref} />
        <div className={`w-100 h-100 pt-3 d-flex`} id="main">
          <Navigation />
          <div
            className="glass mx-2  px-3  h-100 text-center"
            id="content"
            ref={ref}
          >
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
