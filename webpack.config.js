module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'index.js',
        // filename: '[name].[contenthash].js', 
        // http 响应头 缓存用的 cache control
    }
}