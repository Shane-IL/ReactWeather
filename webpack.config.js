const webpack = require('webpack');

module.exports = {
    entry: [
        'script!jquery/dist/jquery.min.js',
        'script!foundation-sites/dist/js/foundation.min.js',
        './app/app.jsx'
    ],
    externals: {
        jquery: 'jQuery'
    },
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    plugins: [
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery'
        }),
    ],
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
            ErrorModal: 'app/components/ErrorModal.jsx',
            openWeatherMap: 'app/api/openWeatherMap.jsx',
            applicationStyles: 'app/styles/app.scss'
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
