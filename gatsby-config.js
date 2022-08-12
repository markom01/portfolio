module.exports = {
  siteMetadata: {
    title: "Portfolio | Marko M.",
    siteUrl: `https://marko.gatsbyjs.io`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-SX8LB89F9Q", // Google Analytics / GA
        ],
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
        },
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@node": "node_modules",
          "@myBlocks": "src/components/blocks/myBlocks",
          "@vendor": "src/components/blocks/vendor",
          "@images": "src/images",
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
  ],
}
