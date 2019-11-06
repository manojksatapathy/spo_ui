const path = require('path');
module.exports = {
    devtool: "source-map",
    entry: {
        entry: './src/index.js'
    },
    output: {
        path: __dirname,
        filename: 'index1.js'
    },
    resolve: {
        alias: {
            src: path.resolve(__dirname, 'src/')
        }
    },
    devServer: {
        historyApiFallback: {
            index: './index.html',
        },
        inline: true,
        port: 3333,
        proxy: {
            "/ibm/spo/api/v1/*" :{
                target: "https://localhost:9443/",
                //target: "https://SPOAPI:9443/",
                secure: false,
                changeOrigin: true
            }
        }
    },
    mode: "development",
    performance: {
        hints: "warning",
        maxEntrypointSize: 50000000,
        maxAssetSize: 30000000
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'svg-url-loader',
                query: {
                    limit: 10000,
                    mimetype: 'application/svg+xml'
                }
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader',
                options: {
                  name: '[path][name].[ext]',
                },
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use:[
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            localIdentName:'[path][name]__[local]',
                            modules: true,
                            url: true
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                    { loader: "sass-loader" }
                ]
            }
        ]
    }
}