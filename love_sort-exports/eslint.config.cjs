module.exports = [
  {
    ...require("eslint-config-love"),
    files: ["**/*.js", "**/*.ts"],
  },
  {
    ignores: ["demo/input.ts"],
  },
];
