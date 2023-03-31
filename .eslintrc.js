module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        'plugin:vue/vue3-essential',
        'eslint:recommended',
        '@vue/typescript/recommended',
        'plugin:prettier/recommended',
    ],
    parserOptions: {
        ecmaVersion: 2020,
    },
    rules: {
        indent: [2, 4],
        semi: [2, 'always'],
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'prettier/prettier': [
            'error',
            {
              printWidth: 120,
              tabWidth: 4,
              useTabs: false,
              semi: true,
              singleQuote: true,
              quoteProps: 'consistent',
              jsxSingleQuote: false,
              trailingComma: 'all',
              bracketSpacing: true,
              jsxBracketSameLine: false,
              arrowParens: 'always',
              requirePragma: false,
              insertPragma: false,
              proseWrap: 'preserve',
              htmlWhitespaceSensitivity: 'strict',
              vueIndentScriptAndStyle: false,
              endOfLine: 'lf',
            },
          ]
    },
};
