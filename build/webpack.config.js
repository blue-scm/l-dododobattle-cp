const CONFIG = require("./config").default;
const path = require("path");
const webpack = require("webpack");

//entryは案件ごとに適宜追加してください
module.exports = {
    mode: "production",
    entry: {
        main: CONFIG.PATH.es6 + "main.es6",
    },

    output: {
        filename: "[name].js",
    },

    devtool: false,
    cache: true,

    module: {
        rules: [
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

            //glsl-loader
            {
                test: /\.(glsl|vs|fs|vert|frag)$/,
                exclude: /node_modules/,
                use: ["raw-loader", "glslify-loader"],
            },
        ],
    },

    resolve: {
        extensions: [".es6", ".js"],
        modules: [path.resolve(__dirname, "./node_modules"), "node_modules"],
    },

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
