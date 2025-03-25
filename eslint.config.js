import globals from 'globals';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import stylistic from '@stylistic/eslint-plugin';

export default [
	{
		files: [
			'**/*.js',
			'**/*.jsx',
			'**/*.ts',
			'**/*.tsx'
		]
	},
	{
		ignores: [
			'node_modules/**',
			'build/**',
			'dist/**',
			'.next/**'
		]
	},

	// Base config for all JavaScript and TypeScript files
	{
		languageOptions: { 
			globals: {
				...globals.node,
			},
			ecmaVersion: 'latest',
			parserOptions: {
				ecmaFeatures: {
					jsx: false,
				},
				sourceType: 'module',
			},
		},
		plugins: {
			'@stylistic': stylistic
		},
		rules: {
			'@stylistic/indent': [
				'error',
				'tab'
			],
			semi: [
				'error',
				'always'
			],
			quotes: [
				'error',
				'single',
				{
					'allowTemplateLiterals': true
				}
			],
			'no-console': 'error'
		}
	},
	
	// TypeScript specific configuration
	{
		files: [
			'**/*.ts',
			'**/*.tsx'
		],
		plugins: {
			'@typescript-eslint': typescriptEslint,
		},
		languageOptions: {
			parser: typescriptParser,
			parserOptions: {
				project: './tsconfig.json',
				ecmaVersion: 'latest',
				sourceType: 'module',
			},
		},
		rules: {
			// Disable ESLint rules that are handled by TypeScript
			'no-unused-vars': 'off',
			// Enable TypeScript-specific rules
			'@typescript-eslint/no-unused-vars': 'error',
			'@typescript-eslint/no-explicit-any': 'warn',
			'@typescript-eslint/no-non-null-assertion': 'warn',
			'@typescript-eslint/no-empty-interface': 'error',
			'@typescript-eslint/no-empty-function': 'warn',
			'@typescript-eslint/ban-ts-comment': 'warn',
			'@typescript-eslint/no-var-requires': 'error',
			'@typescript-eslint/prefer-as-const': 'error',
		},
	},
];
