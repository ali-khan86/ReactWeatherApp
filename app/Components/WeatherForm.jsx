var React=require('react');

var WeatherForm=React.createClass(
    {
        onFormSubmit:function(e)
        {
            e.preventDefault();
            var city=this.refs.City.value;
            if(city.length>0)
            {
                this.refs.City.value='';
                this.props.onSearch(city);
            }
        },
        render:function()
        {
            return(
                
                <div>
                     
                     <form onSubmit={this.onFormSubmit}>
                     <input type="text" ref="City" placeholder='Enter City Name' />
                     <button className='button expanded hollow'>
                         Get Weather
                     </button>
                     </form>
                </div>
               
            );
        }
    }
);

module.exports=WeatherForm;