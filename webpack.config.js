const path = require('path')

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: './index.js',
    output: {
        filename: 'js/main.js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'eval-source-map',
    devServer: {
        hot: true,
        static: {
            directory: './dist',
            watch: true
        }
    }
}