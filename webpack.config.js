const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        home: "./app.js"
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].bindle.js"
    },
    devServer: {
        static: {
          directory: path.join(__dirname, '/'),
        },
        //compress: true,
        port: 9000,
      },
};