module.exports = {
  extends: '@antfu',
  plugins: [
    'no-autofix',
    'eslint-plugin-local-rules',
  ],

  rules: {
    'local-rules/replace-bad-import': 'warn',
    'local-rules/enforce-foo-bar': 'warn',
    'local-rules/define-emits-syntax': 'warn',

    'space-before-function-paren': 0,
    '@typescript-eslint/space-before-function-paren': [
      2,
      {
        anonymous: 'always',
        named: 'always',
        asyncArrow: 'always',
      },
    ],

    // '@typescript-eslint/prefer-function-type': 2,

    'unused-imports/no-unused-imports': 0, // look below
    'no-autofix/unused-imports/no-unused-imports': 2,

    'vue/define-emits-declaration': [1, 'type-based'],

  },
}
