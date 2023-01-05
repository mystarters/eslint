module.exports = {
  root: true,
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    '@typescript-eslint/space-before-function-paren': [
      2,
      {
        anonymous: 'always',
        named: 'always',
        asyncArrow: 'always',
      },
    ],
    'react/react-in-jsx-scope': 0,
  },
  overrides: [
    {
      files: ['vite.config.ts'],
      parserOptions: {
        project: './tsconfig.node.json',
        ecmaVersion: 12,
        sourceType: 'module',
      },
      rules: {
        'import/no-extraneous-dependencies': 0,
      },
    },
  ],
};
