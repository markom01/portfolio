module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
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
  ],
}
