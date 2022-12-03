import React from "react";

interface SectionProps {
  children: React.ReactNode;
  id: string;
  className?: string;
}

export default function Section({
  children,
  id,
  className = "",
}: SectionProps) {
  return (
    <section id={id} className={`px-2 px-md-4 ${className}`}>
      <h2 className="mb-5">{id}</h2>
      {children}
    </section>
  );
}
