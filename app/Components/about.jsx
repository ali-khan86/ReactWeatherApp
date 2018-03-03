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
        <div>
            <h1 className='text-center'>About</h1>
            <p>This is a weather application build using React. I have bulid it to learn and folow Complete
                React application Development Course
            </p>
            <p>Here are some of the tools I have used</p>
            <ul>
                <li><a href="https://facebook.github.io/react">React</a>-This was javascript framework used</li>
                <li><a href="http://openweathermap.org">Open Weather Map</a>-This is a web sevice that is used to get
                weather data by city name</li>
            </ul>
        </div>
        
    );
    
} 

module.exports=about;