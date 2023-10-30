module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {   // add your custom rules here
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    semi:['warn','always'],
    eqeqeq: 'warn',
    'no-unused-vars': ['warn', { varsIgnorePattern: '^React$' }],
    'react/prop-types':'warn'
  },
};
