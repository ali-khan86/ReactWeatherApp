var React=require('react');
var WeatherForm=require('weatherform');
var WeatherMessage=require('weathermessage');
var openWeatherMap=require('openWeatherMap');

var weather=React.createClass(
    {
        getInitialState:function()
        {
            return{
                 isLoading:false
            }
               
            
            
         },
        handleSearch:function(city)
        {
            var that=this;
            this.setState({
                isLoading:true
            });
            openWeatherMap.getTemp(city).then(
                function(temp)
                {
                    that.setState(
                        {
                            city:city,
                            temp:temp,
                            isLoading:false
                        }
                    );
                },
                function(err)
                {
                    that.setState({isLoading:false});
                    alert(err);
                }
            );
           
        },
       
        render:function()
        {
            function renderMessage()
            {
                if(isLoading)
                {
                    return <h3>Loading ...</h3>
                }
                else if(temp && city)
                {
                    return <WeatherMessage city={city} temp={temp}/>;
                }
            }
            var {temp,city,isLoading}=this.state;
            return(
                
                <div>
                <h3>Get Weather</h3>
                <WeatherForm onSearch={this.handleSearch}/>
                {/* <WeatherMessage city={city} temp={temp}/> */}
                {renderMessage()}
                </div>
            )
        }
    }
);

module.exports=weather;