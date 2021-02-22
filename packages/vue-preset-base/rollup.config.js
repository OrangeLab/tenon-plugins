import babel from '@rollup/plugin-babel';
// Default Bundle To Es5
const config = {
  input: 'src/index.js',
  output: {
    dir: 'dist',
    format: 'cjs'
  },
  plugins: [babel({ 
    extensions: ['js', 'ts'],
    presets: ['@babel/preset-env', '@babel/preset-typescript'] 
  })],
}

export default config