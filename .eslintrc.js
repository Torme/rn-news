module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    babelOptions: {
      presets: ['@babel/preset-react'],
    },
    requireConfigFile: false,
  },
  extends: [
    'airbnb',
    'eslint:recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    __DEV__: true,
    fetch: true,
    XMLHttpRequest: true,
    FormData: true,
  },
  plugins: [
    'react',
    'react-hooks',
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.web.js', '.ios.js', '.android.js', '.ts', '.tsx', '.jsx'],
      },
    },
    react: {
      version: 'detect',
    },
  },
  rules: {
    'no-multi-spaces': [2, { ignoreEOLComments: true, exceptions: { VariableDeclarator: true } }],
    'import/no-dynamic-require': 0,
    'no-console': 0,
    'no-use-before-define': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'import/no-extraneous-dependencies': ['error', { packageDir: './' }],
    'padding-line-between-statements': [
      2,
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
      { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
    ],
    'no-multiple-empty-lines': [2, { max: 1 }],
    'react/destructuring-assignment': 0,
    'no-bitwise': 0,
    'no-plusplus': 0,
    'jsx-a11y/accessible-emoji': 0,
    eqeqeq: [1, 'smart'],
    'import/extensions': [1, { js: 'never', ts: 'never' }],
    'react/function-component-definition': [2, { namedComponents: 'arrow-function', unamedComponents: '' }],
    'import/no-relative-packages': 0,
    'function-paren-newline': 0,
    indent: ['error', 2, { SwitchCase: 1 }],
  },
  overrides: [
    {
      env: {
        browser: true,
        es2021: true,
        node: true,
      },
      parser: '@typescript-eslint/parser',
      files: ['*.d.ts', '*.ts', '*.tsx'],
      parserOptions: {
        project: ['./tsconfig.json'],
        ecmaFeatures: {
          jsx: true
        }
      },
      extends: [
        'airbnb',
        'airbnb/hooks',
        'airbnb-typescript',
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        'plugin:react-hooks/recommended'
      ],
      plugins: [
        'react'
      ],
      rules: {
        'react/react-in-jsx-scope': 'off',
        'no-multi-spaces': [2, { ignoreEOLComments: true, exceptions: { VariableDeclarator: true } }],
        'no-console': 0,
        'no-use-before-define': 'off',
        'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
        'import/no-extraneous-dependencies': ['error', { packageDir: './' }],
        'padding-line-between-statements': [
          2,
          { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
          { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
        ],
        'no-multiple-empty-lines': [2, { max: 1 }],
        'react/destructuring-assignment': 0,
        'no-bitwise': 0,
        'no-plusplus': 0,
        'jsx-a11y/accessible-emoji': 0,
        eqeqeq: [1, 'smart'],
        'import/extensions': [1, { js: 'never', ts: 'never', json: 'always' }],
        '@typescript-eslint/no-floating-promises': [1, { ignoreVoid: false }],
        '@typescript-eslint/no-namespace': 0,
        'react/prop-types': 0,
        '@typescript-eslint/restrict-template-expressions': [2, { allowBoolean: true, allowAny: true, allowNullish: true }],
        '@typescript-eslint/indent': ['error', 2],
        'react/function-component-definition': [1, { namedComponents: 'arrow-function', unamedComponents: '' }],
        'import/no-relative-packages': 0,
        'no-shadow': 0,
        '@typescript-eslint/no-shadow': 1,
        'function-paren-newline': 0,
        // ROADMAP
        'react-hooks/exhaustive-deps': 0,
        '@typescript-eslint/no-use-before-define': 0
      },
    },
  ],
};