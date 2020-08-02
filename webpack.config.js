const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require('copy-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const loader = require('sass-loader');

module.exports = {
    
    mode: 'development',
    
    devtool: 'cheap-eval-source-map',

    devServer: {
        contentBase: './public',
    },
  
    entry: {
        index: './src/js/index.js',

    },

    plugins:[
        new VueLoaderPlugin(),
        /*new CopyPlugin({
            patterns: [
                {from: 'src/images', to: 'images' },
                {from: 'src/icons', to: 'icons' },
            ],
        }),*/
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/pug/pages/index.pug'
        }),
        new HtmlWebpackPlugin({
            filename: 'about.html',
            template: './src/pug/pages/about.pug'
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilenamw: "[id].css"
        }),
    ],
  
    output: {
        filename: '[name].bundle.js',
        //chunkFilename: '[name]'.bundle.js,
        path: path.resolve(__dirname, 'public'),
    },

    resolve: {
        alias: {
          images: path.resolve(__dirname, 'src/images/'),
          icons: path.resolve(__dirname, 'src/icons/'),
          vue: 'vue/dist/vue.js',
          'vue-router':  'vue-router/dist/vue-router.js',
        },
    },
  
    module:{
        rules: [

            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                      scss: 'vue-style-loader!css-loader!sass-loader', // <style lang="scss">
                      sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax', // <style lang="sass">
                    }
                }
            },

            {
                test: /\.s?css$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },

            {
                test: /\.(png|jp(e)?g|gif)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'images/',
                    esModule: false,
                }
            },

            {
                test: /\.svg$/i,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'icons/',
                    esModule: false,
                }
            },

            {
                test: /\.js$/,
                loader: 'babel-loader',
            },
            
           /* {
                test: /\.png$/,
                use: [
                  {
                    loader: 'url-loader',
                    options: {
                      limit: 8192,
                      name: 'images/[name].[hash].[ext]'
                    }
                  }
                ]
            },*/

            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                loader: 'file-loader',
                options:{
                    name: "fonts/[name].[ext]"
                }
            },

            {
                test: /\.pug$/,
                oneOf: [
                  // это применяется к `<template lang="pug">` в компонентах Vue
                  {
                    resourceQuery: /^\?vue/,
                    use: ['pug-plain-loader']
                    
                  },
                  // это применяется к импортам pug внутри JavaScript
                  {
                    loader: 'pug-loader',
                    options: {
                        pretty: true,
                    }
                  }
                ]
            }

        ]
    },

};