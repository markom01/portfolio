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
          // Avoids sending pageview hits from custom paths
          exclude: ["/404"],
        },
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
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
        icon: "src/images/Logo.svg",
        background_color: `#f05024`,
        theme_color: `#f05024`,
        cache_busting_mode: "none",
        legacy: false, // this will not add apple-touch-icon links to <head>
      },
    },
    {
      resolve: "gatsby-plugin-offline",
      options: {
        precachePages: [`/index`],
        workboxConfig: {
          globPatterns: ["*.html"],
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Poppins`],
        display: "swap",
      },
    },
    "gatsby-plugin-pnpm",
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true, // Print removed selectors and processed file names
        // develop: true, // Enable while using `gatsby develop`
        // ignore: ['/ignored.css'], // Ignore files/folders
        // purgeOnly : ['components/'], // Purge only these files/folders
        purgeCSSOptions: {
          // https://purgecss.com/configuration.html#options
          // safelist: ['safelist'], // Don't remove this selector
        },
        // More options defined here https://purgecss.com/configuration.html#options
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          breakpoints: [400, 800],
          placeholder: `blurred`,
          quality: 50,
          formats: [`webp`],
        },
      },
    },
    "gatsby-plugin-image",
  ],
}
