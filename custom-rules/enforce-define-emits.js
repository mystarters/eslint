/* eslint-disable no-console */
module.exports = {
  meta: {
    type: 'suggestion',
    docs: {
      description: 'Enforce a specific syntax for defineEmits',
      category: 'Stylistic Issues',
      recommended: true,
    },
    schema: [], // no options
  },
  create (context) {
    return {
      CallExpression (node) {
        // if (
        //   node.callee.type === 'Identifier'
        //   && node.callee.name === 'defineEmits'
        //   && node.arguments.length === 1
        //   && node.arguments[0].type === 'TSTypeLiteral'
        // ) {
        //   const properties = node.arguments[0].members

        //   if (
        //     properties.some(
        //       property => property.type === 'TSMethodSignature'
        //         && property.key.type === 'Identifier'
        //         && property.value.type === 'TSTypeAnnotation'
        //         && property.value.typeAnnotation.type === 'TSTypeLiteral'
        //         && property.value.typeAnnotation.members.length === 1
        //         && property.value.typeAnnotation.members[0].type === 'TSMethodSignature'
        //         && property.value.typeAnnotation.members[0].key.type === 'Identifier'
        //         && property.value.typeAnnotation.members[0].key.name === 'call'
        //         && property.value.typeAnnotation.members[0].value.type === 'TSFunctionType',
        //     )
        //   ) {
        //     context.report({
        //       node,
        //       message: 'Use the correct syntax for defineEmits',
        //     })
        //   }
        // }

        // console.log('node:', Object.keys(node.typeArguments))
        console.log(node.typeArguments)

        if (
          node.callee.type === 'Identifier'
          // node.callee.type === 'FunctionType'
          && node.callee.name === 'defineEmits'
          // && node.arguments.length === 1
          // && node.arguments[0].type === 'TSTypeLiteral'
        ) {
          context.report({
            node,
            message: 'Use the correct syntax for defineEmits',
          })
        }
      },
    }
  },
}
