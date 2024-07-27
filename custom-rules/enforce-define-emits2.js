function createNoTrueArrowFunctions (context) {
  return {
    TSTypeAnnotation (node) {
      // console.log('node:', Object.keys(node))
      // console.log('node:', node.parent.parent.parent.parent.callee.name)

      if (
        node.typeAnnotation.type === 'TSFunctionType'
        // && node.parent.parent.parent.parent.callee.name === 'defineEmits'
      ) {
        context.report({
          node,
          message: 'Do not use function type in defineEmits type. Use a function signature instead.',
        })
      }
    },
  }
}

module.exports = {
  create: createNoTrueArrowFunctions,
}
