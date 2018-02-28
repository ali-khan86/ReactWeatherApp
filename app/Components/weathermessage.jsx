var React=require('react');

var weathermessage=React.createClass(
    {
        render:function()
        {
            var {temp,city}=this.props;
            return(
                <h3>It's {temp} degree in {city}!</h3>
            );
        }
    }
);

module.exports=weathermessage;