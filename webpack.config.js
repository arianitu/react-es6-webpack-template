module.exports = {
    context: __dirname + "/app",
    entry: {
        javascript: "./App.js",
        html: "./index.html"
    },
    
    output: {
        filename: "app.js",
        path: __dirname + "/dist"
    },
    
    module: {
        loaders: [
            { test: /\.js$/, loaders: ['react-hot', 'babel-loader'], exclude: /node_modules/ },
            { test: /\.html$/, loader: "file?name=[name].[ext]" },
        ]
    },
    resolve: {
        extensions: ['', '.js', '.json'] 
    }
};
