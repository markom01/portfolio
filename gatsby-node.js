const path = require("path");
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@node": path.resolve(__dirname, "node_modules"),
        "@components": path.resolve(__dirname, "src/components"),
        "@myBlocks": path.resolve(__dirname, "src/components/blocks/myBlocks"),
        "@vendor": path.resolve(__dirname, "src/components/blocks/vendor"),
        "@sections": path.resolve(__dirname, "src/components/sections"),
        "@pages": path.resolve(__dirname, "src/pages"),
        "@sass": path.resolve(__dirname, "src/sass"),
        "@images": "/src/images",
      },
      extensions: [".scss", ".tsx", ".ts"],
    },
  });
};
