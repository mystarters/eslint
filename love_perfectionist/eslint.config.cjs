// const sortExports = require("eslint-plugin-sort-exports");
const stylistic = require('@stylistic/eslint-plugin')

module.exports = [
  {
    ...require('eslint-config-love'),
    files: ['**/*.js', '**/*.ts'],
  },
  {
    ignores: [
      'demo/input.ts',
      'demo/index-input.ts',
    ],
  },
  stylistic.configs['recommended-flat'],
  // {
  //   plugins: {
  //     "sort-exports": sortExports
  //   },
  //   rules: {
  //     "sort-exports/sort-exports": [
  //       "error",
  //       { sortDir: "asc", ignoreCase: true, sortExportKindFirst: "type" },
  //     ],
  //   },
  // },
]
