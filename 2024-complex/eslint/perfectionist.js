import perfectionist from 'eslint-plugin-perfectionist'

export default {
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
}
