var React=require('react');
var {Link}=require('react-router');


var example=()=>
{
    return(
        <div >
            <h1 className='text-center'>Examples</h1>
            
            <p>Here are few locations to try</p>
            <ol>
                <li> <Link to='?/location=California'> California, CA </Link> </li>
                <li><Link to='?/location=Philadalphia'>Philadalphia , PA</Link></li>
                <li><Link to='/?location=Rio'>Rio, Brazil </Link></li>
            </ol>
        </div>

        
    );
}

module.exports=example;