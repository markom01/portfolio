const config = {
  siteMetadata: {
    title: "Portfolio",
    description: "Front End Web Development & UI/UX Design",
    siteUrl: `https://marko.gatsbyjs.io`,
    image: `/static/Logo.svg`,
    twitterUsername: `@marko_m_01`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        entryLimit: 10,
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
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
          quality: 100,
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