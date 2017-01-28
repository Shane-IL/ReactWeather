const webpack = require('webpack');

const PROD = (process.env.NODE_ENV === 'production');

module.exports = {
    entry: './app/app.jsx',
    output: {
        path: __dirname,
        filename: PROD ? './public/bundle.min.js' : './public/bundle.js'
    },
    plugins: PROD ? [
        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false }
        })
    ] : [],
    resolve: {
        root: __dirname,
        alias: {
            Main: 'app/components/Main.jsx',
            Nav: 'app/components/Nav.jsx',
            Weather: 'app/components/weather/Weather.jsx',
            WeatherForm: 'app/components/weather/WeatherForm.jsx',
            WeatherMessage: 'app/components/weather/WeatherMessage.jsx',
            About: 'app/components/About.jsx',
            Examples: 'app/components/Examples.jsx',
            openWeatherMap: 'app/api/openWeatherMap.jsx'
        },
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react', 'stage-0']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            }
        ]
    },
    devtool: 'cheap-module-eval-source-map'
};
