const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
    entry: "./src/main",
    output: {
        path: "./dist",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: "awesome-typescript-loader"
            },
            {
                test: /\.html$/,
                loader: "html-loader"
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js', '.scss'],
        modules: ['node_modules']
    },
    devServer: {
        port: 3000,
        host: "127.0.0.1",
        historyApiFallback: true,
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000
        },
        outputPath: './dist'
    },
    plugins: [
        new CopyWebpackPlugin([{
            from: 'src/index.html',
            to: 'index.html'
        }])//,
        // new HtmlWebpackPlugin({
        //     template: './src/index.html'
        // }),
        // new webpack.ProvidePlugin({
        //     $: "jquery",
        //     jQuery: "jquery",
        //     'PermissionMatcher': 'permission-matcher-js'
        // })
    ]
};


