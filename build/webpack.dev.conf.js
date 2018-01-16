const webpack =require('webpack');
const config=require('./webpack.base.conf');

config.devServer={
    hot:true,
    publicPath:'/dist/',
    contentBase:'./',
    host:'localhost',
    compress:true,
    port:3000,
    
}
config.plugins.push(new webpack.HotModuleReplacementPlugin());

module.exports=config;