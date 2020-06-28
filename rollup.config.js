import resolve from 'rollup-plugin-node-resolve'

module.exports = {
  input: 'scripts/components.js',
  output: {
    file: 'dist/html/scripts/components.js',
    format: 'es'
  },
  plugins: [
    resolve()
  ]
}
