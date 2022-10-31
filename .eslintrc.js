module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
    ecmaVersion: "latest",
  },
  plugins: ["@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "prettier",
  ],
  rules: {
    "react/jsx-no-target-blank": ["off"],
    "react/prop-types": [
      1,
      {
        skipUndeclared: true,
      },
    ],
  },
  env: {
    es2021: true,
    node: true,
  },
  globals: {
    React: true,
    JSX: true,
  },

  settings: {
    react: {
      version: "detect",
    },
  },
};
