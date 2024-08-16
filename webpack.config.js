import ESLintPlugin from 'eslint-webpack-plugin';

export default () => {
  return {
    mode: 'development',
    entry: {
      index: './index.ts'
    },
    plugins: [
      new ESLintPlugin({
        fix: false,
        files: ['./index.ts'],
        overrideConfigFile: 'eslint.config.mjs',
      })
    ]
  }
}