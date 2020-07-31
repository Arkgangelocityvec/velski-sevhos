const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

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
        new ExtractTextPlugin('style.scss'),
        
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
        
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/pug/pages/index.pug'
        }),
    ],
  
    output: {
        filename: '[name].bundle.js',
        //chunkFilename: '[name]'.bundle.js,
        path: path.resolve(__dirname, 'public'),
    },
  
    module:{
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },

            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                url: false,
                                minimize: true,
                                sourceMap: true
                            }
                        },

                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        },  
                    ]
                })
            },

            {
                test: /\.(png|svg|jpe?g|gif)$/,
                loader: 'file-loader',
                options:{
                    name: "images/[name].[ext]"
                }
            },

            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                loader: 'file-loader',
                options:{
                    name: "scss/fonts/[name].[ext]"
                }
            },

            {
                test: /\.pug$/,
                loader: 'pug-loader',
                options: {
                    pretty: true,
                },
            }

        ]
    }
};