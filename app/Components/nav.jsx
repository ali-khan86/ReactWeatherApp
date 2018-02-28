var React=require('react');
var {Link,IndexLink}=require('react-router');
var main=require('main');
var weather=require('weather');
var about=require('about');
var example=require('example');

var nav=React.createClass(
    {
        render:function()
        {
            return(
                <div>
                <h2>nav component</h2> 
                <IndexLink to="/" activeClassName='active' activeStyle={{fontWeight:'bold'}} >weather </IndexLink>&nbsp;&nbsp;&nbsp;
                <Link to="/about"activeClassName='active' activeStyle={{fontWeight:'bold'}} >about </Link>&nbsp;&nbsp;&nbsp;
                <Link to="/example" activeClassName='active' activeStyle={{fontWeight:'bold'}} >example</Link>
                </div>
            );
        }
    }
);

module.exports=nav;