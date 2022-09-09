module.exports = {
  siteMetadata: {
    title: "Portfolio | Marko M.",
    siteUrl: `https://marko.gatsbyjs.io`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-SX8LB89F9Q", // Google Analytics / GA
        ],
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@node": "node_modules",
          "@myBlocks": "src/components/blocks/myBlocks",
          "@vendor": "src/components/blocks/vendor",
          "@sections": "src/components/sections",
          "@pages": "src/pages",
          "@sass": "src/sass",
        },
        extensions: ["jsx"],
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
        lang: `en`,
        display: `standalone`,
        start_url: `/`,
        icon: "src/images/brand/Logo.svg",
        theme_color: `#f05024`,
        background_color: `#292929`,
        cache_busting_mode: "none",
        legacy: false, // this will not add apple-touch-icon links to <head>
      },
    },
    "gatsby-plugin-pnpm",
    "gatsby-plugin-sass",
    `gatsby-plugin-purgecss`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          breakpoints: [400, 800, 1100],
          placeholder: `blurred`,
          quality: 70,
          formats: [`webp`],
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
      }
    },
    "gatsby-plugin-mdx",
  ],
}
