var React=require('react');

// var about=React.createClass(
//     {
//         render:function()
//         {
//             return(
//                 <h3>about component</h3>
//             );
//         }
//     }
// );

// when u have simple presentional component that only has render fn u can use
//stateless funal component using arrow function

var about=(props)=>{
    return(
        <h3>about component</h3>
    );
    
} 

module.exports=about;