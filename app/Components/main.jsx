var React=require('react');
var Nav=require('nav');

var main=React.createClass({
    render:function()
    {
        return(
            <div>
            <Nav/>
            <h1>Main Component</h1>
            {this.props.children}
            </div>
        );
    }
});

module.exports=main;