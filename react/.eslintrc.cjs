module.exports = {
  root: true,
  extends: [
    'airbnb',
    'airbnb/hooks',
  ],
  env: {
    browser: true,
  },
  rules: {
    'space-before-function-paren': [
      2,
      {
        anonymous: 'always',
        named: 'always',
        asyncArrow: 'always',
      },
    ],
  },
};
