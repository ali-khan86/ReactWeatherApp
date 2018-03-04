var React=require('react');
var WeatherForm=require('weatherform');
var WeatherMessage=require('weathermessage');
var openWeatherMap=require('openWeatherMap');
var ErrorModal=require("ErrorModal");

var weather=React.createClass(
    {
        getInitialState:function()
        {
            return{
                 isLoading:false                }
               
            
            
         },
        handleSearch:function(city)
        {
            var that=this;
            this.setState({
                isLoading:true,
                errorMessage:undefined

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
                function(e)
                {
                    debugger;
                    that.setState(
                        {
                            isLoading:false,
                            errorMessage: e.message
                        });
                   
                }
            );
           
        },
       componentDidMount:function()
       {
           var location=this.props.location.query.location;
           if(location && location.length>0)
           {
            this.handleSearch(location);
            window.location.hash='#/';
           }
           

       },
       componentWillReceiveProps:function(newProps)
        {
            var location=newProps.location.query.location;
           if(location && location.length>0)
           {
            this.handleSearch(location);
            window.location.hash='#/';
           }
        },
        render:function()
        {
            function renderMessage()
            {
                if(isLoading)
                {
                    return <h3 className='text-center'>Loading ...</h3>
                }
                else if(temp && city)
                {
                    return <WeatherMessage city={city} temp={temp}/>;
                }
            }
            function renderError()
            {
                if(typeof errorMessage==='string')
                {
                     return(
                         <ErrorModal message={errorMessage}/>
                         
                     )
                    
                }
            }
            var {temp,city,isLoading,errorMessage}=this.state;
            return(
                
                <div>
                <h1 className='text-center page-title'>Get Weather</h1>
                <WeatherForm onSearch={this.handleSearch}/>
                {/* <WeatherMessage city={city} temp={temp}/> */}
                {renderMessage()}
                {renderError()}
                </div>
            )
        }
    }
);

module.exports=weather;