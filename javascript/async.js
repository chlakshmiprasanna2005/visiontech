//Synchronous - line by line (also called as blocking)

// const { useCallback, Suspense } = require("react")

// console.log("start");
// //alert will not work without html file
// alert("wait here");
// console.log("end");


//Asynchronous-code runs automatically,  it doesnot wait for anything
//Async operations
//1.callback function
//2.promises
//3.Async Await


// console.log("start");
//DOM, setTimeout and setInterval - web API, they are not paet to js

// console.log("start");
// setTimeout(()=>{
//     console.log("Async task in progress");
// },2000);
// console.log("end");

//there are 3 ways of async implement
//1. Callback function is a function that takes another function as an argument
//avoid using callback  function as it will lead you to callback hell that creates unreadability
//multiple function will create callback help
// function fetchData(callback){
//     setTimeout(()=>{
//         callback("data received");
//     },1000);
// }

// function newFunc(data){
//     console.log(data);
    
// }
// fetchData(newFunc);

//promises- is an object used to perform asyn operations
//states of promises(3)
//1.pending
//2.resolved- .then -> promise resolved
//3.rejected
//.catch ->if promise is having error

const promise =new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("data received");
    },2000);
});

promise
.then(data=>console.log(data))
.catch(err=>console.log(err))

//Async Await

async function getData(){
    try{
        const data =await
        console.log("data received again");
        
    }
    catch(error){
        console.log(error);
        

    }

}