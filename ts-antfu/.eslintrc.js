module.exports = {
  extends: '@antfu',
  overrides: [
    {
      files: 'tsconfig*.json',
      rules: {
        'jsonc/comma-dangle': [2, 'always'],
      },
    },
  ],
}
