const path = require("path")

module.exports = {
    mode: "development",
    target: ["web", "es5"],
    entry:  {
        signIn: "./src/sign-in.ts",
        signUp: "./src/sign-up.ts",
        banking: "./src/banking.ts",
    },
    output: {
        path: path.resolve(__dirname, "build", "js"),
        filename: '[name].js',
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                exclude: /node_modules/,
                test: /\.ts$/,
                use: [{
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }, {
                    loader: 'ts-loader'
                }] 
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    }
}
