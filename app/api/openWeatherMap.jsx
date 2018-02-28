var axios=require('axios');
const OPEN_WEATHER_MAP_URL='http://api.openweathermap.org/data/2.5/weather?appid=428067485ce4e692c8b5d4b4b30e9c23&units=imperial';
// api key= 428067485ce4e692c8b5d4b4b30e9c23

module.exports=
{
    getTemp:function(city)
    {
        var encodedLocation=encodeURIComponent(city);
        var requestURI=`${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
   return axios.get(requestURI).then(function(response)
    {
        debugger;
        if(response.message && response.data.cod)
        {
            throw new Error(response.message);
        }
        else
        {
            return response.data.main.temp;
        }
    
    },
    function(response)
    {
        debugger;
            throw new Error(response.message);
        
    
    });
    }
}
