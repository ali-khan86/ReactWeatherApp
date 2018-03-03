var React=require('react');
var {Link,IndexLink}=require('react-router');
var main=require('main');
var weather=require('weather');
var about=require('about');
var example=require('example');

var nav=React.createClass(
    {
        GetWeather:function(e)
        {
            e.preventDefault();
            alert('button clicked');
        },
        render:function()
        {
            return(
                <div className='top-bar'>
                <div className='top-bar-left'>
                <ul className='menu'>
                <li className='menu-text'>React Weather App</li>
                <li><IndexLink to="/" activeClassName='active' activeStyle={{fontWeight:'bold'}} >weather </IndexLink></li>
                <li><Link to="/about"activeClassName='active' activeStyle={{fontWeight:'bold'}} >about </Link></li>
                <li><Link to="/example" activeClassName='active' activeStyle={{fontWeight:'bold'}} >example</Link></li>
                </ul>
                </div>
                <div className='top-bar-right'>
                
                <form onSubmit={this.GetWeather}>
                <ul className="menu">
                <li><input type="search" placeholder="Search Weather" /> </li>
                <li><button type="submit" className="button">Get Weather</button></li>
                 </ul>
                </form>
                
                </div>
                
                </div>
            );
        }
    }
);

module.exports=nav;


                
                
                