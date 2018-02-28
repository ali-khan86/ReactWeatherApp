// function getTempCallback(location,callback)
// {
//     callback(undefined,80);
//     callback('The City is not Found');
// }

// getTempCallback('California',function(err,temp)
// {
//     if(err)
//     {
//         console.log('error',err);
//     }
//     else{
//         console.log('success',temp);
//     }
// })


// function getTempPromise(location)
// {
//     return new  Promise(function(resolve,reject)
//     {
//         setTimeout(function(){
//             resolve(81);
//             reject('City Not Found');
//         },1000)
        
//     }
    
//     )
    
// }

// getTempPromise('California').then(
//     function(temp)
//     {
//         console.log('promise success',temp)
//     },
//     function(error)
//     {
//         console.log('promise error',error);
//     }
// )


function addPromise(a,b)
{
    return new Promise(function(resolve,reject)
    {
    if(!isNaN(a) && !isNaN(b))
    {
        resolve(a+b)
    }
      else{
        reject('Both a and b must be numbers');
      }  
    }
    )
}

addPromise(4,6).then(function(sum)
{
 console.log('success', sum);   
},
function(err)
{
    conslole.log('error',err);
    
});

addPromise(4,'ali').then(function(sum)
{
 console.log('success', sum);   
},
function(err)
{
    console.log('error',err);
    
});