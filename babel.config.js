module.exports = {
  loaders: [
    { test: /\.js$/, loader: 'babel', query: {compact: false} }
  ],
  presets: [
    ['@babel/preset-env', {targets: {node: 'current'}}],
    '@babel/preset-typescript',
  ],
};  