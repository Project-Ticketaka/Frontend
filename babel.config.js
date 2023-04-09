module.exports = {
    presets: [
      ['@babel/preset-env', {targets: {node: 'current'}}],
      '@babel/preset-typescript',
    ],
    loaders: [
    { test: /\.js$/, loader: 'babel', query: {compact: false} }
]
  };
  
  