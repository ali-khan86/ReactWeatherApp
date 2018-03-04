
var React=require('react');
var ReactDOM=require('react-dom');
var {Route, Router, IndexRoute, hashHistory}=require('react-router');
var main=require('main');
var weather=require('weather');
var about=require('about');
var example=require('example');

//load Foundation
require('style!css!foundation-sites/dist/foundation.min.css');
require('style!css!sass!applicationStyles');
$(document).foundation();


var divElement=document.getElementById('wraper');
 ReactDOM.render(
 <Router history={hashHistory}>
 <Route path="/" component={main}>
 <Route path="about" component={about} />
 <Route path="example" component={example} />
 <IndexRoute component={weather} />
 </Route>
 </Router>,
 divElement
)
   