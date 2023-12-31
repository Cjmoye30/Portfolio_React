module.exports = {
    entry: `${__dirname}/src/index.js`,
    output: {
      path: `${__dirname}/build`,
      publicPath: '/Portfolio_React/build/',
      filename: 'bundle.js',
    },
  
    module: {
      rules: [{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }],
    },
  
    // to mimic GitHub Pages serving 404.html for all paths
    // and test spa-github-pages redirect in dev
    devServer: {
      historyApiFallback: {
        rewrites: [{ from: /\/Portfolio_React\/[^?]/, to: '/404.html' }]
      },
    },
  };