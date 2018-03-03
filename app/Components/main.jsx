var React=require('react');
var Nav=require('nav');

var main=React.createClass({
    render:function()
    {
        return(
            <div>
            <Nav/>
            <div className='row'>
            <div className='comumn large-4 medium-6 small-centered'>
            {this.props.children}
            </div>
            
            </div>
            
            </div>
        );
    }
});

module.exports=main;