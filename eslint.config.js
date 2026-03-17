const js = require("@eslint/js");
const html = require("eslint-plugin-html");

module.exports = [
  js.configs.recommended,
  {
    files: ["**/*.html"],
    plugins: { html },
  },
  {
    languageOptions: {
      globals: {
        document: "readonly",
        window: "readonly",
        setTimeout: "readonly",
        clearTimeout: "readonly",
        setInterval: "readonly",
        clearInterval: "readonly",
        console: "readonly",
        parseInt: "readonly",
        Math: "readonly",
      },
    },
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "error",
      "eqeqeq": "warn",
      "no-var": "warn",
      "prefer-const": "warn",
    },
  },
];
