var React=require('react');
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
            var modal=new Foundation.Reveal($('#error-modal'));
            modal.open();
        },
        render:function()
        {
            var {title,message}=this.props;
            return(
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
            
        }
    }
);
module.exports=errorModal;