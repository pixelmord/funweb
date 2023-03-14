/**
 * @type {import('prettier').Options}
 */
module.exports = {
  trailingComma: 'es5',
  tabWidth: 2,
  semi: true,
  printWidth: 120,
  singleQuote: true,
  svelteSortOrder: 'options-scripts-markup-styles',
  svelteStrictMode: false,
  svelteAllowShorthand: true,
  svelteIndentScriptAndStyle: true,
  plugins: [
    require('prettier-plugin-packagejson'),
    require('prettier-plugin-svelte'),
    require('prettier-plugin-organize-imports'),
    require('prettier-plugin-tailwindcss'),
  ],
  pluginSearchDirs: false,
  overrides: [{ files: '*.svelte', options: { parser: 'svelte' } }],
};
