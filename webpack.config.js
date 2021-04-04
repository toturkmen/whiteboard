const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const client = {
    target: 'web',
    entry: './src/client/js/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'client/js/bundle.js'
    },
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'client/index.html',
            template: './src/client/index.html',
            inject: false
        }),
        new MiniCssExtractPlugin({
            filename: 'client/css/bundle.css'
        })
    ],
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
        ]
    },
    optimization: {
        minimizer: [
            new TerserPlugin({
                extractComments: false
            }),
            new CssMinimizerPlugin()
        ]
    },
};

const server = {
    target: 'node',
    entry: './src/server/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'server/bundle.js'
    },
    devServer: {
        contentBase: './dist'
    },
    plugins: [
    ],
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    optimization: {
        minimizer: [
            new TerserPlugin({
                extractComments: false
            })
        ]
    },
};

module.exports = [client, server];