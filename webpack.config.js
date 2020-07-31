const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

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
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/pug/pages/index.pug'
        }),
    ],
  
    output: {
        filename: '[name].bundle.js',
        //chunkFilename: '[name]'.bundle.js,
        path: path.resolve(__dirname, 'dist'),
    },
  
    module:{
        rules: [
            {
                test: /\.s?css$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
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