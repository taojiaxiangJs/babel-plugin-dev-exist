module.exports = ({ types: t }, params) => {
  return {
    visitor: {
      Identifier(path) {
        const parentIsIf = t.isIfStatement(path.parentPath)
        const isDevFlag = path.node.name === params.flag
        if (parentIsIf && isDevFlag) {
          // 将 Identifier 转换成 string
          const stringNode = t.stringLiteral(params.flag)
          path.replaceWith(stringNode)
        }
      },
      StringLiteral(path) {
        const parentIsIf = t.isIfStatement(path.parentPath)
        const isDevFlag = path.node.value === params.flag
        if (parentIsIf && isDevFlag) {
          // 在 prod 环境下移除代码
          if (process.env.NODE_ENV === 'production') {
            path.parentPath.remove()
          }
        }
      },
    },
  }
}
