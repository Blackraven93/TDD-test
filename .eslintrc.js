module.exports = {
  parserOptions: {
    sourceType: "module",
  },
  env: {
    browser: true,
    es6: true,
  },
  extends: ["eslint-config-tui", "prettier"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
  },
};
