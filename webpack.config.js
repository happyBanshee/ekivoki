module.exports = {
    // context: "src",
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
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js', '.scss'],
        modules: ['node_modules']
    }
};


