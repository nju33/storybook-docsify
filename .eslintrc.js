module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  env: {
    node: true,
    es6: true,
  },
  globals: {
    React: true,
    styled: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      createClass: 'createReactClass',
      pragma: 'React',
      version: 'detect',
    },
  },
  plugins: ['@typescript-eslint', 'react'],
  extends: [
    'xo-space/esnext',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
    'prettier/react',
  ],
  rules: {
    'capitalized-comments': 0,
    'react/prop-types': 0,
    'valid-jsdoc': [
      2,
      {
        requireReturn: false,
        requireParamType: false,
      },
    ],
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      rules: {
        'no-unused-vars': 0,
        '@typescript-eslint/no-unused-vars': 2,
        'no-undef': 0,
      },
    },
  ],
};
