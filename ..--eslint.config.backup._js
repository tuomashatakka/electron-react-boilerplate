const { FlatCompat } = require('@eslint/eslintrc')

const compat  = new FlatCompat()

const webpack = {
  config: require.resolve('./.erb/configs/webpack.config.eslint.ts'),
}

const parserOptions = {
  ecmaVersion: 2022,
  sourceType: 'module',
}

const importResolver = {
  node: {}, // See https://github.com/benmosher/eslint-plugin-import/issues/1396#issuecomment-575727774
  webpack,
  typescript: {},
}

const importParsers = {
  '@typescript-eslint/parser': [ '.ts', '.tsx' ]
}


const rules = {
  // A temporary hack related to IDE not resolving correct package.json
  'import/no-extraneous-dependencies':  'off',
  'react/react-in-jsx-scope':           'off',
  'react/jsx-filename-extension':       'off',
  'import/extensions':                  'off',
  'import/no-unresolved':               'off',
  'import/no-import-module-exports':    'off',
  'no-shadow':                          'off',

  'no-unused-vars':                     'off',

  'indent':                           [ 'error', 2 ],
  'linebreak-style':                  [ 'error', 'unix' ],
  'quotes':                           [ 'error', 'single' ],
  'semi':                             [ 'error', 'never' ],
}

const config = {
  languageOptions: {
    parserOptions},
  rules,
  settings: {
    'import/resolver': importResolver,
    'import/parsers':  importParsers },
}


/** @type {import('eslint').Linter.FlatConfig[]} */
module.exports = [ config ]
