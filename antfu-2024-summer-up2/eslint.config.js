import antfu from '@antfu/eslint-config'

export default antfu(
  {
    unocss: true,
    vue: true,
    formatters: true,
  },
  {
    ignores: ['demo/input.ts'],
  },
  {
    rules: {
      'style/space-before-function-paren': [
        2,
        {
          anonymous: 'always',
          named: 'always',
          asyncArrow: 'always',
        },
      ],
      'ts/prefer-function-type': 2,
    },
  },
)
