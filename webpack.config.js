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
            { test: /\.js$/, loader: 'react-hot', exclude: /node_modules/ },
            { test: /\.js$/, loader: 'babel', exclude: /node_modules/, query: { presets: ['react', 'es2015'] } },
            { test: /\.html$/, loader: "file?name=[name].[ext]" },
        ]
    },
    resolve: {
        extensions: ['', '.js', '.json'] 
    }
};
