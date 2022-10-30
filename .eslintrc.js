module.exports = {
  ignorePatterns: ["**/*.(module.scss|woff2|png|jpg)", "src/sass/**"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
    ecmaVersion: "latest",
  },

  env: {
    es6: true,
  },
};
