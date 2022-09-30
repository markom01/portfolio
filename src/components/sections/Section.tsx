import React from "react";
import { Fade } from "react-reveal";

interface SectionProps {
  children: React.ReactNode;
  id: string;
  className?: string;
}

export default function Section({ children, id, className }: SectionProps) {
  return (
    <Fade cascade>
      <section id={id} className={`px-4 ${className}`}>
        <h2 className="mb-5">{id}</h2>
        {children}
      </section>
    </Fade>
  );
}
