module.exports = {
  globals: {
    window: true,
    module: true
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended',
    'plugin:vue/essential',
  ],
  rules: {
    'vue/no-unused-vars': 'error'
  }
}