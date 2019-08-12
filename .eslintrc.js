// module.exports = {
//   root: true,
//   extends: '@react-native-community',
// };

module.exports = {
  parser: 'babel-eslint',
  env: {
    es6: true,
    node: true,
  },
  extends: ['airbnb', 'prettier', 'prettier/react'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 6,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    indent: ['error', 2, { SwitchCase: 2 }],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'comma-dangle': [
      'error',
      {
        arrays: 'never',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'never',
        functions: 'ignore',
      },
    ],
    'jsx-quotes': ['error', 'prefer-single'],
    'linebreak-style': ['error', 'unix'],
    'global-require': 'off',
    'no-console': 'off',
    'no-bitwise': 'off',
    'no-use-before-define': 'off',
    'no-unused-vars': 'warn',
    'import/no-useless-path-segments': 'off',
    'import/no-unresolved': 'off',
    'react/require-default-props': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'react/destructuring-assignment': 'off',
    'react/forbid-prop-types': 'off',
    'react/jsx-no-bind': 'off',
    'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx'] }],
    'react/no-array-index-key': 'off',
    'react/jsx-uses-vars': 'error',
    'react/jsx-uses-react': 'error',
    'react/prop-types': 'off',
    'react/prefer-stateless-function': ['off', { ignorePureComponents: true }],
    'prefer-destructuring': [
      'error',
      {
        VariableDeclarator: {
          array: false,
          object: true,
        },
        AssignmentExpression: {
          array: true,
          object: false,
        },
      },
      {
        enforceForRenamedProperties: false,
      },
    ],
  },
};
