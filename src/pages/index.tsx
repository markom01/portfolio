import type { HeadProps } from "gatsby";
import React, { Suspense, useRef, useState } from "react";

import Layout from "@components/layout/Layout";
import { SEO } from "@components/seo";

import Loader from "@myBlocks/loader/Loader";

import BelowTheFold from "@sections/BelowTheFold";
import Hero from "@sections/hero/Hero";

import "@sass/App";

export function Head(props: HeadProps) {
  return <SEO />;
}

export default function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Layout>
        <Hero />
        <BelowTheFold />
      </Layout>
    </Suspense>
  );
}
