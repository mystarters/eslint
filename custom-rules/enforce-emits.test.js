/* eslint-disable no-console */
// enforce-foo-bar.test.js
const { RuleTester } = require('eslint')
const rule = require('./enforce-define-emits')

const ruleTester = new RuleTester({
  // Must use at least ecmaVersion 2015 because
  // that's when `const` variables were introduced.
  parserOptions: { ecmaVersion: 2015 },
})

// Throws error if the tests in ruleTester.run() do not pass
ruleTester.run(
  'define-emits-syntax', // rule name
  rule, // rule code
  { // checks
    // 'valid' checks cases that should pass
    valid: [{
      code: 'defineEmits',
    }],
    // 'invalid' checks cases that should not pass
    invalid: [{
      code: 'defineEmits',
      output: 'const foo = "bar";',
      errors: 1,
    }],
  },
)

console.log('All tests passed!')
