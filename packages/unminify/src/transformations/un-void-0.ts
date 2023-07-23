import wrap from '../wrapAstTransformation'
import type { ASTTransformation } from '../wrapAstTransformation'

/**
 * void 0 -> undefined
 *
 * @see https://babeljs.io/docs/en/babel-plugin-transform-undefined-to-void
 */
export const transformAST: ASTTransformation = (context) => {
    const { root, j } = context

    root
        .find(j.UnaryExpression, {
            operator: 'void',
            argument: { type: 'Literal' },
        })
        .forEach((p) => {
            if (!j.Literal.check(p.node.argument)) return

            const { value } = p.node.argument
            if (value !== 0) return
            p.replace(j.identifier('undefined'))
        })
}

export default wrap(transformAST)
