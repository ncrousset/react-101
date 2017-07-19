var pkg = require('./package.json');

module.exports = {
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    context: __dirname,
    entry: {
        app: ['./app.jsx']
    },
    devServer: {
        host: '127.0.0.1',
        port: 8080,
        inline: true
    },
    output: {
        path: './build',
        filename: pkg.name + '.js',
        publicPath: '/build/'
    },
    module: {
        loaders: [
        {
            test: /(\.js|.jsx)$/,
            loader: 'babel',
            query: {
                presets: ['es2015', 'stage-2', 'react']
            }
        }
    ]
  }
}
