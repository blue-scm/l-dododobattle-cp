const CONFIG = require("./config").default;
const path = require("path");
const webpack = require("webpack");

//entryは案件ごとに適宜追加してください
module.exports = {
    mode: "production",
    entry: {
        main_ts: CONFIG.PATH.ts + "main.ts",
    },
    output: {
        //outputは基本、変更しなくてOK
        filename: "[name].js",
    },
    module: {
        rules: [
            {
                test: [/\.js$/, /\.ts$/],
                exclude: /node_modules/,
                loader: "ts-loader",
                options: {
                    configFile: path.resolve(__dirname, "tsconfig.json"),
                },
            },
            //CSS in JS
            {
                test: /\.s?css$/i,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: { url: false, sourceMap: false },
                    },
                    "sass-loader",
                ],
            },
        ],
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
        modules: [path.resolve(__dirname, "./node_modules"), "node_modules"],
    },

    devtool: false,
    plugins: [
        new webpack.SourceMapDevToolPlugin({
            filename: "maps/[name].js.map",
            exclude: ["vendor.js"],
        }),
    ],

    optimization: {
        minimize: true,
        splitChunks: {
            name: "vendor",
            chunks: "initial",
        },
    },

    performance: {
        maxAssetSize: 1000000,
        maxEntrypointSize: 1000000,
    },
};
