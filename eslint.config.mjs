import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import stylistic from '@stylistic/eslint-plugin';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ignores: ['**/custom.d.ts'],
  },
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        React: true,
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    plugins: { '@stylistic': stylistic },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'eqeqeq': 2,
      'no-console': 2,
      'react/jsx-first-prop-new-line': [2, 'multiline'],
      '@stylistic/quotes': [2, 'single', 'avoid-escape'],
      '@stylistic/semi': [2, 'always'],
      '@stylistic/key-spacing': 2,
      '@stylistic/space-before-blocks': 2,
      '@stylistic/keyword-spacing': 2,
      '@stylistic/arrow-spacing': 2,
      '@stylistic/object-curly-spacing': [2, 'always'],
      '@stylistic/no-trailing-spaces': 2,
    },
  },
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
];
