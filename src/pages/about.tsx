import React from "react";
import type { HeadProps } from "gatsby";
import { SEO } from "@components/seo";

export function Head(props: HeadProps) {
  return <SEO title="About" />;
}

export default function About() {
  return (
    <>
      <title>About</title>
    </>
  );
}
