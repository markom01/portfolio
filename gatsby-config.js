module.exports = {
  siteMetadata: {
    title: "Portfolio | Marko M.",
    siteUrl: `https://markom01.gatsbyjs.io`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {},
        extensions: ["jsx", "js", "sass"],
      },
    },
    "gatsby-plugin-pnpm",
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          breakpoints: [400, 800],
        },
      },
    },
    "gatsby-plugin-image",
  ],
}
