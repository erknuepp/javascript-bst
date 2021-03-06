module.exports = {
  'env': {
    'es2020': true,
    'browser': true,
    'node': true,
    'jest': true,
  },
  'parserOptions': {
    'ecmaVersion': 2020,
    'sourceType': 'module',
    'ecmaFeatures': {
      'jsx': true,
    },
  },
  'rules': {
    'accessor-pairs': 'warn',
    'array-bracket-spacing': 'warn',
    'array-callback-return': 'warn',
    'arrow-body-style': 'warn',
    'arrow-parens': 'warn',
    'arrow-spacing': 'warn',
    'block-scoped-var': 'warn',
    'block-spacing': 'warn',
    'brace-style': 'warn',
    'camelcase': 'warn',
    'comma-dangle': ['warn', 'always-multiline'],
    'comma-spacing': 'warn',
    'comma-style': 'warn',
    'computed-property-spacing': 'warn',
    'consistent-return': 'warn',
    'consistent-this': 'warn',
    'constructor-super': 'warn',
    'curly': 'warn',
    'default-case': [
      'warn',
      {
        'commentPattern': '^no default$',
      },
    ],
    'dot-location': ['warn', 'property'],
    'dot-notation': 'warn',
    'eol-last': 'warn',
    'eqeqeq': 'warn',
    'func-call-spacing': 'warn',
    'func-name-matching': 'warn',
    'func-names': ['warn', 'as-needed'],
    'generator-star-spacing': ['warn', 'neither'],
    'getter-return': 'warn',
    'guard-for-in': 'off', // see no-restricted-syntax
    'id-blacklist': ['warn', 'temp'],
    'indent': ['warn', 2],
    'init-declarations': 'warn',
    'jsx-quotes': 'warn',
    'key-spacing': 'warn',
    'keyword-spacing': 'warn',
    'linebreak-style': 'warn',
    'lines-around-directive': 'warn',
    'max-len': [
      'warn',
      {
        'code': 120,
      },
    ],
    'max-statements-per-line': 'warn',
    'new-cap': 'warn',
    'new-parens': 'warn',
    'no-alert': 'warn',
    'no-array-constructor': 'warn',
    'no-caller': 'warn',
    'no-case-declarations': 'warn',
    'no-catch-shadow': 'warn',
    'no-class-assign': 'warn',
    'no-compare-neg-zero': 'warn',
    'no-cond-assign': 'warn',
    'no-const-assign': 'warn',
    'no-constant-condition': 'warn',
    'no-control-regex': 'warn',
    'no-debugger': 'warn',
    'no-delete-var': 'warn',
    'no-div-regex': 'warn',
    'no-dupe-args': 'warn',
    'no-dupe-class-members': 'warn',
    'no-dupe-keys': 'warn',
    'no-duplicate-case': 'warn',
    'no-duplicate-imports': 'warn',
    'no-else-return': 'warn',
    'no-empty': 'warn',
    'no-empty-character-class': 'warn',
    'no-empty-pattern': 'warn',
    'no-eq-null': 'warn',
    'no-eval': 'warn',
    'no-ex-assign': 'warn',
    'no-extend-native': 'warn',
    'no-extra-bind': 'warn',
    'no-extra-boolean-cast': 'warn',
    'no-extra-label': 'warn',
    'no-extra-parens': [
      'warn',
      'all',
      {
        'nestedBinaryExpressions': false,
      },
    ],
    'no-extra-semi': 'warn',
    'no-fallthrough': 'warn',
    'no-floating-decimal': 'warn',
    'no-func-assign': 'warn',
    'no-global-assign': 'warn',
    'no-implicit-coercion': 'warn',
    'no-implied-eval': 'warn',
    'no-inner-declarations': 'warn',
    'no-invalid-regexp': 'warn',
    'no-irregular-whitespace': 'warn',
    'no-iterator': 'warn',
    'no-label-var': 'warn',
    'no-labels': [
      'warn',
      {
        'allowLoop': true,
        'allowSwitch': false,
      },
    ],
    'no-lone-blocks': 'warn',
    'no-lonely-if': 'warn',
    'no-loop-func': 'warn',
    'no-mixed-operators': [
      'warn',
      {
        'groups': [
          ['&', '|', '^', '~', '<<', '>>', '>>>'],
          ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
          ['&&', '||'],
          ['in', 'instanceof'],
        ],
        'allowSamePrecedence': false,
      },
    ],
    'no-mixed-spaces-and-tabs': 'warn',
    'no-multi-assign': 'warn',
    'no-multi-spaces': 'warn',
    'no-multi-str': 'warn',
    'no-multiple-empty-lines': [
      'warn',
      {
        'maxBOF': 0,
        'max': 1,
        'maxEOF': 0,
      },
    ],
    'no-native-reassign': 'warn',
    'no-negated-in-lhs': 'warn',
    'no-new': 'warn',
    'no-new-func': 'warn',
    'no-new-object': 'warn',
    'no-new-symbol': 'warn',
    'no-new-wrappers': 'warn',
    'no-obj-calls': 'warn',
    'no-octal': 'warn',
    'no-octal-escape': 'warn',
    'no-param-reassign': 'warn',
    'no-proto': 'warn',
    'no-prototype-builtins': 'warn',
    'no-redeclare': [
      'warn',
      {
        'builtinGlobals': true,
      },
    ],
    'no-regex-spaces': 'warn',
    'no-restricted-globals': 'warn',
    'no-restricted-properties': 'warn',
    'no-restricted-syntax': [
      'warn',
      {
        'selector': 'ForInStatement',
        'message': 'for-in loop used (did you mean to write a for-of loop?)',
      },
      {
        'selector': 'BinaryExpression[operator=\'in\']',
        'message': 'in operator used (did you mean to call a membership-testing method?)',
      },
    ],
    'no-return-assign': 'warn',
    'no-return-await': 'warn',
    'no-script-url': 'warn',
    'no-self-assign': 'warn',
    'no-self-compare': 'warn',
    'no-sequences': 'warn',
    'no-shadow': 'warn',
    'no-shadow-restricted-names': 'warn',
    'no-sparse-arrays': 'warn',
    'no-tabs': 'warn',
    'no-template-curly-in-string': 'warn',
    'no-this-before-super': 'warn',
    'no-throw-literal': 'warn',
    'no-trailing-spaces': 'warn',
    'no-undef': 'warn',
    'no-underscore-dangle': [
      'warn',
      {
        'allowAfterThis': true,
        'allowAfterSuper': true,
      },
    ],
    'no-unexpected-multiline': 'warn',
    'no-unmodified-loop-condition': 'warn',
    'no-unneeded-ternary': 'warn',
    'no-unreachable': 'warn',
    'no-unsafe-finally': 'warn',
    'no-unsafe-negation': 'warn',
    'no-unused-expressions': [
      'warn',
      {
        'allowShortCircuit': false,
        'allowTernary': false,
        'allowTaggedTemplates': false,
      },
    ],
    'no-unused-labels': 'warn',
    'no-unused-vars': [
      'warn',
      {
        'args': 'none',
        'ignoreRestSiblings': false,
        'varsIgnorePattern': '^_',
      },
    ],
    'no-use-before-define': [
      'warn',
      {
        'functions': false,
        'classes': true,
        'variables': true,
      },
    ],
    'no-useless-call': 'warn',
    'no-useless-computed-key': 'warn',
    'no-useless-concat': 'warn',
    'no-useless-constructor': 'warn',
    'no-useless-escape': 'warn',
    'no-useless-rename': 'warn',
    'no-useless-return': 'warn',
    'no-var': 'warn',
    'no-void': 'warn',
    'no-warning-comments': 'warn',
    'no-whitespace-before-property': 'warn',
    'no-with': 'warn',
    'nonblock-statement-body-position': 'off', // see curly
    'object-curly-newline': 'warn',
    'object-curly-spacing': ['warn', 'always'],
    'object-property-newline': 'warn',
    'object-shorthand': 'warn',
    'one-var': ['warn', 'never'],
    'one-var-declaration-per-line': 'warn',
    'operator-assignment': 'warn',
    'operator-linebreak': ['warn', 'after'],
    'padded-blocks': ['warn', 'never'],
    'prefer-arrow-callback': 'warn',
    'prefer-const': 'warn',
    'prefer-numeric-literals': 'warn',
    'prefer-promise-reject-errors': 'warn',
    'prefer-rest-params': 'warn',
    'prefer-spread': 'warn',
    'prefer-template': 'warn',
    'quote-props': ['warn', 'as-needed'],
    'quotes': ['warn', 'single'],
    'radix': 'warn',
    'require-await': 'warn',
    'require-yield': 'warn',
    'rest-spread-spacing': 'warn',
    'semi': 'warn',
    'semi-spacing': 'warn',
    'space-before-function-paren': ['warn', 'never'],
    'space-in-parens': 'warn',
    'space-infix-ops': 'warn',
    'space-unary-ops': 'warn',
    'spaced-comment': 'warn',
    'strict': ['warn', 'never'],
    'symbol-description': 'warn',
    'template-curly-spacing': 'warn',
    'unicode-bom': 'warn',
    'use-isnan': 'warn',
    'valid-jsdoc': 'warn',
    'valid-typeof': 'warn',
    'wrap-iife': 'warn',
    'yield-star-spacing': 'warn',
    'yoda': 'warn',
  },
  'reportUnusedDisableDirectives': true,
};
