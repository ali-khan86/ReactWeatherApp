module.exports={
    entry:'./app/app.jsx',
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
           openWeatherMap:'app/api/openWeatherMap.jsx'          
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

