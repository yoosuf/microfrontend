module.exports = {
    parser: 'babel-eslint', // Use Babel as the parser
    extends: [
        'plugin:vue/essential', // Use the essential rules from @vue/eslint-config
        'eslint:recommended'
    ],
    rules: {
        // Add any custom rules here
    },
    env: {
        browser: true,
        node: true,
        es6: true,
    },
};