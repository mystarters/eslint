import stylistic from '@stylistic/eslint-plugin'
import parser from '@typescript-eslint/parser'

export default [
  {
    languageOptions: {
      parser,
      parserOptions: {
        project: true,
      },
    },
    files: ['**/*.js', '**/*.ts'],
  },
  stylistic.configs['recommended-flat'],
]
