import React from "react";
import { Slide } from "react-reveal";

interface SectionProps {
  children: React.ReactNode;
  id: string;
  className?: string;
}

export default function Section({ children, id, className }: SectionProps) {
  return (
    <Slide bottom>
      <section id={id} className={`px-4 ${className}`}>
        <h2 className="mb-5">{id}</h2>
        {children}
      </section>
    </Slide>
  );
}
