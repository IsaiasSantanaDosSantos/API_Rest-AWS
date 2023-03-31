module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb-base',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-console': 'off',
    singleQuote: 'on',
    'class-methods-use-this': 'off',
    // 'eslint operator-linebreak': [error, none]
    'import/first': 'off',
    'no-param-reassign': 'off',
    'camelcase': 'off',
  },
};
