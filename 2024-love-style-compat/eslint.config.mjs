import stylistic from '@stylistic/eslint-plugin'
import love from 'eslint-config-love'
import compat from 'eslint-plugin-compat'

export default [
  {
    ...love,
    files: ['**/*.js', '**/*.ts'],
  },
  {
    ignores: [
      'demo/input.ts',
      'demo/index-input.ts',
    ],
  },
  stylistic.configs['recommended-flat'],
  compat.configs['flat/recommended'],
]
