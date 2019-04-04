const copyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
    
    mode: 'development',

    entry: {
        app: './src/index.js'
    },

    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'app.bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src'),
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },

    devServer: {
        contentBase: path.resolve(__dirname, 'build')
    },

    plugins: [
        new copyWebpackPlugin([
            {
                from: path.resolve(__dirname, 'index.html'),
                to: path.resolve(__dirname, 'build')
            }
        ])
    ]
}