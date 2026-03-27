/**
 * @lzr/eslint-config
 * Configuração ESLint compartilhada da LZR Technologies
 * Baseada no Engineering Handbook: https://code.lzrtechnologies.com
 */

import js from '@eslint/js'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import importPlugin from 'eslint-plugin-import'

/** @type {import('eslint').Linter.Config[]} */
export const base = [
  js.configs.recommended,
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        projectService: true,
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      import: importPlugin,
    },
    rules: {
      // === TypeScript Strict (Handbook: Zero any) ===
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/consistent-type-imports': [
        'error',
        { prefer: 'type-imports' },
      ],
      '@typescript-eslint/no-non-null-assertion': 'error',

      // === Qualidade de código (Handbook) ===
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-debugger': 'error',
      'no-empty-catch': 'off',
      'no-useless-catch': 'error',
      eqeqeq: ['error', 'always'],
      'prefer-const': 'error',
      'no-var': 'error',

      // === Imports organizados ===
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            ['parent', 'sibling'],
            'index',
            'type',
          ],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
      'import/no-duplicates': 'error',

      // === Naming conventions (Handbook) ===
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'variable',
          format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
        },
        {
          selector: 'function',
          format: ['camelCase', 'PascalCase'],
        },
        {
          selector: 'typeLike',
          format: ['PascalCase'],
        },
        {
          selector: 'enumMember',
          format: ['UPPER_CASE', 'PascalCase'],
        },
      ],
    },
  },
]

/** Configuração extra para projetos React/Next.js */
export const react = [
  ...base,
  {
    files: ['**/*.{tsx,jsx}'],
    rules: {
      // Handbook: Server Components por padrão
      'react/jsx-no-target-blank': 'error',
      'react/self-closing-comp': 'error',
    },
  },
]

/** Configuração extra para projetos Node/API */
export const node = [
  ...base,
  {
    files: ['**/*.ts'],
    rules: {
      // Handbook: No hardcoded values
      'no-magic-numbers': [
        'warn',
        {
          ignore: [0, 1, -1],
          ignoreArrayIndexes: true,
          ignoreDefaultValues: true,
        },
      ],
    },
  },
]

export default base
