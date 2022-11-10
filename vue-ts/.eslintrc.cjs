/* idmytro/starters/vue-ts */
module.exports = {
  root: true,
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', './src'],
        ],
        extensions: [
          '.ts',
          '.js',
          '.json',
          '.vue',
          '.css',
          '.scss',
        ],
      },
    },
  },
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:vue/recommended',
    '@vue/airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: [
    'vue',
  ],
  rules: {
    'max-len': 0,

    'import/extensions': [1, 'ignorePackages', { js: 'never', mjs: 'never', ts: 'never' }],
    'import/no-extraneous-dependencies': [2, {
      devDependencies: [
      ],
    }],
    'import/prefer-default-export': 0,
    'vue/first-attribute-linebreak': [2, { singleline: 'beside' }],
    'vue/max-attributes-per-line': [2, {
      singleline: {
        max: 1,
      },
      multiline: {
        max: 1,
      },
    }],
    'vue/max-len': 0,
  },
};
