module.exports = {
    env: {
      browser: true,
      es2021: true,
      node: true,
    },
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:prettier/recommended',
    ],
    parser: '@babel/eslint-parser',
    parserOptions: {
      ecmaVersion: 12,
      sourceType: 'module',
    },
    plugins: [
      '@babel',
    ],
    rules: {
      'prettier/prettier': 'error',
      'no-console': 'off',
    },
  };
  