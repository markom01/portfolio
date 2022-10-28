import React from "react";
import { useSiteMetadata } from "../hooks/useSiteMetadata";

export const SEO = ({
  title = "Portfolio",
  description,
  pathname,
  children,
}: {
  title?: string;
  description?: string;
  pathname?: string;
  children?: React.ReactNode;
}) => {
  const {
    description: defaultDescription,
    image,
    siteUrl,
    twitterUsername,
  }: Queries.MetadataQuery["site"]["siteMetadata"] = useSiteMetadata();

  const seo = {
    title: `${title} | Marko M.`,
    description: description || defaultDescription,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname || ``}`,
    twitterUsername,
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:creator" content={seo.twitterUsername} />
      {children}
    </>
  );
};
