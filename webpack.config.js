var webpack=require('webpack')
module.exports={
    entry:[
        'script!jquery/dist/jquery.min.js',
        'script!foundation-sites/dist/foundation.min.js',
        './app/app.jsx'
    ],
    externals:
    {
        jquery:'jQuery'
    },
    plugins:
    [
        new webpack.ProvidePlugin({
            '$':'jquery',
            'jQuery':'jquery'
        })
    ],
    output:{
        path:__dirname,
        filename:'./public/bundle.js'

    },
    resolve:
    {
        root:__dirname,
        alias:{
           main:'app/Components/main.jsx',
           nav:'app/Components/nav.jsx',
           weather:'app/Components/weather.jsx',
           weatherform:'app/Components/WeatherForm.jsx',
           weathermessage:'app/Components/weathermessage.jsx',
           about:'app/Components/about.jsx',
           example:'app/Components/example.jsx' ,
           openWeatherMap:'app/api/openWeatherMap.jsx' ,
           ErrorModal:'app/Components/errorModal.jsx'         
        },
        extentions:['','js','jsx']
    },
    devtool:'cheap-module-eval-source-map',
    module:{
        loaders:[
            {
        loader:'babel-loader',
        query:{
            presets:['react', 'es2015']
        },
        test:/\.jsx?$/,
        exclude:/(node_modules| bower_components)/
    }
]   
    }
        
};

