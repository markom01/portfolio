import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  graphqlTypegen: true,
  siteMetadata: {
    title: "Portfolio | Marko M.",
    siteUrl: `https://marko.gatsbyjs.io`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-LPZCYXK5HV", // Google Analytics / GA
        ],
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        entryLimit: 10,
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: `Portfolio | Marko M.`,
        short_name: `Portfolio`,
        description: `Frontend web development`,
        display: `standalone`,
        start_url: `/`,
        icon: "./static/Logo.svg",
        theme_color: `#d70930`,
        background_color: `#292929`,
        cache_busting_mode: "none",
        legacy: false, // this will not add apple-touch-icon links to <head>
      },
    },
    "gatsby-plugin-pnpm",
    {
      resolve: "gatsby-plugin-sass",
      options: {
        useResolveUrlLoader: true,
      },
    },
    `gatsby-plugin-purgecss`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          breakpoints: [400, 800, 1100],
          placeholder: `blurred`,
          quality: 70,
        },
      },
    },
    "gatsby-plugin-image",
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `data`,
        path: `${__dirname}/data`,
      },
    },
    "gatsby-plugin-mdx",
  ],
};

export default config;
