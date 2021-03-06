const path=require('path');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports=(env)=>{
    const isProduction=env==='production';

    console.log('env',env)

    return{

     entry:'./src/app.js',
     output:{
         path:path.join(__dirname,'public'),
         filename:'bundle.js'
     },
     optimization: {
        minimizer: [
            new UglifyJsPlugin({
              cache: true,
              parallel: true,
              sourceMap: true // set to true if you want JS source maps
            }),
          ]
      },

     plugins:[
         new MiniCssExtractPlugin({
             filename:'styles.css',
         })
     ],
     module:{
         rules:[{
             loader:'babel-loader',
             test:/\.js$/,
             exclude:/node_modules/
         },{
             test:/\.s?css$/,
             use:[
                 MiniCssExtractPlugin.loader,
                 "css-loader",
                 "sass-loader"
             ]
         }]
     },

     devtool: isProduction?'source-map':'cheap-module-eval-source-map',
     devServer:{
         contentBase:path.join(__dirname,'public'),
         historyApiFallback:true
     }
 };
}
