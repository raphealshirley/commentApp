const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: path.resolve(__dirname, 'index.js'),
    output:{
        path:path.resolve(__dirname, 'dist/'),
        filename: 'bundle.js'
    },
    module:{
        rules: [
            {
                test: /\.jsx?$/,
                exclude:/node_modules/,
                loader: 'babel-loader',
                query:{
                    presets:['react','es2015','stage-0']
                }
            },{
                test:/\.(sass|scss|css)$/,
                use:['style-loader','css-loader','sass-loader']
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname,"index.tpl.html"),
            filename:"index.html"
        })
    ],
    watch:true,
    devServer:{
        historyApiFallback:true,
        inline:true,
        contentBase:path.resolve(__dirname,"dist/"),
        port:8091
    }
}
