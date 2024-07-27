const stylistic = require('@stylistic/eslint-plugin')
const perfectionist = require('eslint-plugin-perfectionist')

module.exports = [
  {
    ...require('eslint-config-love'),
    files: ['**/*.js', '**/*.ts'],
  },
  {
    ignores: [
      'demo/input.ts',
      'demo/index-input.ts',
    ],
  },
  stylistic.configs['recommended-flat'],
  {
    plugins: {
      perfectionist,
    },
    rules: {
      'perfectionist/sort-imports': 'error',
      'perfectionist/sort-exports': [
        'error',
        {
          type: 'alphabetical',
          order: 'asc',
          ignoreCase: true,
        },
      ],
      'perfectionist/sort-named-exports': [
        'error',
        {
          type: 'alphabetical',
          order: 'asc',
          ignoreCase: true,
          groupKind: 'mixed',
        },
      ],
    },
  },
]
