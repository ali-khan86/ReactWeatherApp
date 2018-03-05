var React=require('react');
var ReactDom=require('react-dom');
var ReactDOMServer=require('react-dom/server');
var errorModal=React.createClass(
    {
        getDefaultProps:function()
        {
            return{
                title:'Error'
            };
            
        },
        propTypes:
        {
            title:React.PropTypes.string,
            message:React.PropTypes.string.isRequired
        },
        componentDidMount:function()
        {
            var {title,message}=this.props;
            var modalMarkup=(
                <div id='error-modal' className='reveal text-center' data-reveal="">
                    <h3>{title}</h3>
                    <p>{message}</p>
                    <p>
                        <button className='button hollow tiny' data-close="">
                            Okay
                        </button>
                    </p>
        
                    </div>
                    );
                    var $modal=$(ReactDOMServer.renderToString(modalMarkup));
                    $(ReactDom.findDOMNode(this)).html($modal);
            var modal=new Foundation.Reveal($('#error-modal'));
            modal.open();
        },
        render:function()
        {
            
            return(
                <div></div>
            );
            
        }
    }
);
module.exports=errorModal;