//Synchronous - line by line (also called as blocking)

// const { useCallback, Suspense } = require("react")

// console.log("start");
// //alert will not work without html file
// alert("wait here");
// console.log("end");


//Asynchronous

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
function fetchData(callback){
    setTimeout(()=>{
        callback("data received");
    },1000);
}

function newFunc(data){
    console.log(data);
    
}
fetchData(newFunc);

//promises

