const plugins = [ '@typescript-eslint', 'react', '@stylistic' ]

const parserOptions = {
  ecmaVersion: 2022,
  sourceType: 'module',
}

const imports = {
  resolver: {
    // See https://github.com/benmosher/eslint-plugin-import/issues/1396#issuecomment-575727774 for line below
    node: {},
    webpack: {
      config: require.resolve('./.erb/configs/webpack.config.eslint.ts'),
    },
    typescript: {},
  },

  parsers: {
    '@typescript-eslint/parser': [ '.js', '.ts', '.tsx' ],
  }
}

const settings = {
  'import/resolver': imports.resolver,
  'import/parsers':  imports.parsers,
}

module.exports = {
  extends: 'erb',
  plugins,
  rules: {
    'no-shadow':                            0,
    '@typescript-eslint/no-shadow':         2,

    'no-unused-vars':                       0,
    '@typescript-eslint/no-unused-vars':    2,

    'prettier/prettier':                    0,

    '@stylistic/indent':                  [ 2, 2, {
      MemberExpression:         1,
      SwitchCase:               1,
      StaticBlock:              { body: 1 },
      FunctionDeclaration:      { body: 1, parameters: 2 },
      FunctionExpression:       { body: 1, parameters: 2 },
      CallExpression:           { arguments: 'first' },
      ArrayExpression:          1,
      ObjectExpression:         1,
      ImportDeclaration:        1,
      flatTernaryExpressions:   false,
      offsetTernaryExpressions: false,
    }],
    '@stylistic/semi':                    [ 2, 'never' ],
    'quotes':                             [ 2, 'single' ],
    'linebreak-style':                    [ 2, 'unix' ],
    'no-extra-semi':                      [ 1 ],
    'complexity':                         [ 1, 6 ],
    'max-depth':                          [ 1, 3 ],
    'max-lines':                          [ 1, 480 ],
    'max-len':                            [ 1, 480 ],
    'max-statements':                     [ 1, 12 ],

    'no-tabs':                              1,
    'no-console':                           1,
    'no-debugger':                          1,
    'dot-notation':                         1,
    'no-extra-parens':                      1,
    'comma-spacing':                      [ 1, { 'before': false, 'after': true }],
    'class-methods-use-this':             [ 1 ],
    'array-bracket-spacing':              [ 1, 'always', { 'arraysInArrays': false, 'objectsInArrays': false }],
    'object-curly-spacing':               [ 1, 'always', { 'objectsInObjects': false, 'arraysInObjects': false }],

    'eqeqeq':                             [ 2, 'smart' ],
    'use-isnan':                            2,
    'no-undef':                             2,
    'no-obj-calls':                         2,
    'no-new-symbol':                        2,
    'no-func-assign':                       2,
    'no-class-assign':                      2,
    'no-array-constructor':                 2,

    // A temporary hack related to IDE not resolving correct package.json
    'import/no-extraneous-dependencies':    0,
    'react/react-in-jsx-scope':             0,
    'react/jsx-filename-extension':         0,
    'import/extensions':                    0,
    'import/no-unresolved':                 0,
    'import/no-import-module-exports':      0,
    'import/no-mutable-exports':            2,
    'import/prefer-default-export':         2,
    'import/no-unassigned-import':        [ 2, { 'allow': [ '**/*.{le,c,sc}ss', '**/*.styl' ]}],

    'jsx-quotes':                               [ 1, 'prefer-single' ],
    'react/jsx-uses-vars':                        2,
    'react/jsx-uses-react':                       2,
    '@stylistic/jsx-closing-bracket-location':  [ 2, 'line-aligned' ],
    '@stylistic/jsx-curly-spacing':             [ 2, { 'when': 'always', 'spacing': {
      'objectLiterals': 'never'
    }}],
    'react/jsx-wrap-multilines':                [ 2, {
      'declaration':  false,
      'assignment':   false,
      'return':       false,
      'arrow':        false,
      'condition':    false,
      'logical':      false,
      'prop':         false
    }],

    'space-before-function-paren':      [ 1, { 'asyncArrow': 'always', 'anonymous': 'always', 'named': 'always' }],
    'arrow-spacing':                      1,
    'keyword-spacing':                  [ 1, { 'before': true, 'after': true }],
    'func-call-spacing':                [ 1, 'never' ],

    'implicit-arrow-linebreak':           0,
    'function-paren-newline':             0,
    'brace-style':                        0,
    'arrow-body-style':                 [ 1, 'as-needed' ],
    'newline-per-chained-call':         [ 1, { 'ignoreChainWithDepth': 3 }],
    'lines-between-class-members':      [ 1, 'always', { 'exceptAfterSingleLine': true }],
    'one-var-declaration-per-line':     [ 1, 'always' ],
    'padding-line-between-statements':  [ 1,
      { 'blankLine': 'any', 'prev': [ 'const', 'let', 'var' ], 'next': '*' },
      { 'blankLine': 'any', 'prev': [ 'const', 'let', 'var' ], 'next': [ 'const', 'let', 'var' ]},
      { 'blankLine': 'always', 'prev': 'import', 'next': '*' },
      { 'blankLine': 'any', 'prev': 'import', 'next': 'import' },
      { 'blankLine': 'always', 'prev': '*', 'next': [ 'return', 'export', 'function', 'class', 'block-like', 'multiline-let', 'multiline-const', 'multiline-var' ]}
    ],

    'multiline-comment-style':    [ 1, 'separate-lines' ],
    'line-comment-position':      [ 1, {
      'position':                   'above',
      'ignorePattern':              'note:',
      'applyDefaultIgnorePatterns': true,
    }],
    'lines-around-comment':       [ 1, {
      'beforeBlockComment':         true,
      'beforeLineComment':          false,
      'afterLineComment':           false,
      'allowClassEnd':              false,
      'allowBlockEnd':              false,
    }]
  },

  parserOptions,
  settings,
}
