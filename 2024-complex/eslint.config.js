import stylistic from '@stylistic/eslint-plugin'
import love from 'eslint-config-love'

import perfectionistConfig from './eslint/perfectionist.js'

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
  perfectionistConfig,
]
