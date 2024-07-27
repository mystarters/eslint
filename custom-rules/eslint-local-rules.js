// eslint-local-rules.js

const fooRule = require('./enforce-foo-bar')

const defineEmitsSyntax = require('./enforce-define-emits')

module.exports = {
  'enforce-foo-bar': fooRule,

  'define-emits-syntax': defineEmitsSyntax,

  'replace-bad-import': {
    meta: {
      fixable: 'code',
      docs: {
        description: 'My awesome ESLint local rule that will replace an import declaration with something else',
        category: 'Possible Errors',
        recommended: false,
      },
      schema: [],
    },
    create (context) {
      return {
        ImportDeclaration (node) {
          // if (node.source.value.includes('bad-import-declaration')) {
          if (node.source.value.includes(') => true')) {
            context.report({
              node,
              message: 'Use proper syntax',
              // fix: fixer => fixer.replaceText(node, node.specifiers.map(specifier => `import ${specifier.local.name} from './good-import-declaration';`).join('\n')),
            })
          }
        },
      }
    },
  },
}
