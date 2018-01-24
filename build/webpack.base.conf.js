const OpenBrowserPlugin = require('open-browser-webpack-plugin');
module.exports = {
    entry: "./src/index.tsx",
    output: {
      filename: "bundle.js",
      path: __dirname + "/dist"
    },
  
    devtool: "source-map",
  
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".json"]
    },
  
    module: {
      rules: [
        { test: /\.tsx?$/, loader: "ts-loader" },
        { test: /\.css$/, loader: 'style-loader!css-loader' },
        {test: /\.scss$/,loader: 'style-loader!css-loader!sass-loader'},
        {test: /\.(png|jpeg|gif|jpg)$/,loader: 'url?limit=25000'},
        { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
      ]
    },
  
    plugins:[
      new OpenBrowserPlugin({url: 'http://localhost:3000/'})
  ]
  };