module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es6: true,
	},
	extends: ['eslint:recommended', 'plugin:react/recommended'],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2018,
		sourceType: 'module',
	},
	plugins: ['react', 'react-hooks'],
	rules: {
		quotes: ['error', 'single'],
		semi: ['error', 'always'],
		'react/prop-types': 0,
		'no-console': 0,
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn',
		'react/display-name': 0,
	},
};
