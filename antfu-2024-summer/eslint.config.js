import antfu from '@antfu/eslint-config'

export default antfu(
  {
    unocss: true,
    vue: true,
    typescript: true,
  },
  {
    ignores: ['demo/input.ts'],
  },
  {

    '@stylistic/ts/space-before-function-paren': [
      2,
      {
        anonymous: 'always',
        named: 'always',
        asyncArrow: 'always',
      },
    ],
    '@typescript-eslint/prefer-function-type': 2,
  },
)
