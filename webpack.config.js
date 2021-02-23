const path=require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');

module.exports={
    mode:'development',    
    entry:"./src/index.js",
    output:{
        filename:"main.js",
        path:path.resolve(__dirname,"dist")
    },
    devtool: 'inline-source-map',
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./index.html'
        })
    ]
};