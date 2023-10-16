const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// App directory
const appDirectory = fs.realpathSync(process.cwd());

// Gets absolute path of file within app directory
const resolveAppPath = relativePath => path.resolve(appDirectory, relativePath);

// Host
const host = process.env.HOST || 'localhost';

// Required for babel-preset-react-app
process.env.NODE_ENV = 'development';

module.exports = {  devServer: {

    // Serve index.html as the base
    contentBase: resolveAppPath('public'),

    // Enable compression
    compress: true,

    // Enable hot reloading
    hot: true,

    host,

    port: 3000,

    // Public path is root of content base
    publicPath: '/',

  },}