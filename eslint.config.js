export default [
    {
        files: ['**/*.js'],
        ignores: ['node_modules/**'], //esto es para que no me marque errores en node_modules 
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module'
        },
        rules: {
            semi: ['error', 'always'],
            quotes: ['error', 'single'],
        }
    }
];

