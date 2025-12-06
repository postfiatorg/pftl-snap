module.exports = {
  extends: ['../../.eslintrc.js'],

  parserOptions: {
    tsconfigRootDir: __dirname,
  },

  overrides: [
    {
      files: ['snap.config.ts'],
      extends: ['@metamask/eslint-config-nodejs'],
    },

    {
      files: ['*.test.ts'],
      rules: {
        '@typescript-eslint/unbound-method': 'off',
      },
    },
  ],

  rules: {
    'jsdoc/match-description': 'off',
    'jsdoc/require-returns': 'off',
    'jsdoc/require-param-description': 'off',
    '@typescript-eslint/no-throw-literal': 'off',
    'jsdoc/check-tag-names': 'off',
    '@typescript-eslint/naming-convention': 'off',
    'no-console': 'error',
    'no-warning-comments': ['error', { terms: ['todo', 'fixme'], location: 'start' }],
    // Disable rules that conflict with SES/Snap environment
    'no-restricted-syntax': 'off', // SES doesn't support # private fields
    'no-restricted-globals': 'off', // crypto IS available in Snap environment
    'id-length': 'off', // Allow short identifiers like 'w' for callbacks
    'no-param-reassign': 'off', // Allow parameter reassignment for seed normalization
    'require-unicode-regexp': 'off', // Unicode flag not always needed
    '@typescript-eslint/consistent-type-definitions': 'off', // Allow interfaces
    'no-useless-catch': 'off', // Allow catch blocks that just rethrow
    '@typescript-eslint/prefer-nullish-coalescing': 'off', // Allow || for fallbacks
  },

  ignorePatterns: ['!.eslintrc.js', 'dist/'],
};
