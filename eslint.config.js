import pionxzh from '@pionxzh/eslint-config'

export default pionxzh(
    {
        typescript: true,
        react: false,
        markdown: false,
        vue: true,
        yaml: false,
        ignores: [
            '**/node_modules/**',
            '**/dist/**',
        ],
    },
    {
        rules: {
            'no-console': 'warn',
            'ts/ban-ts-comment': 'off',
            'test/prefer-lowercase-title': 'off',
            'pionxzh/top-level-function': 'off',
            'pionxzh/consistent-list-newline': 'off',
        },
    },
    {
        files: ['examples/**'],
        rules: {
            'no-var': 'off',
            'no-void': 'off',
            'no-alert': 'off',
            'no-console': 'off',
            'no-cond-assign': 'off',
            'eqeqeq': 'off',
            'one-var': 'off',
            'vars-on-top': 'off',
            'prefer-template': 'off',
            'prefer-rest-params': 'off',
            'prefer-arrow-callback': 'off',
            'style/semi': 'off',
            'style/quotes': 'off',
            'style/comma-dangle': 'off',
        },
    },
)
