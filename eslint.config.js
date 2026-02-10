const globals = require('globals');

module.exports = [
    {
        files: ['**/*.js'],
        ignores: ['node_modules/**'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'commonjs',
            globals: {
                ...globals.node,
                ...globals.jest
            }
        },
        rules: {
            'semi': ['error', 'always'],
            'quotes': ['error', 'single']
        }
    }
];
