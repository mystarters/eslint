/* idmytro/starters/nuxt3 */
module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
  ],

  rules: {
    'vue/multi-word-component-names': 0,
  },
};
