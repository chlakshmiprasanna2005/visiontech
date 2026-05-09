//chapter -19
//functions

//syntax
// function add(){
//     console.log(4 +6);    
// }
// add() //call function

//types or ways to create functions
//1. function declaration
//2. function expression
//3. arrow function
//4. immediately invoked function (self invoking sunction)

//1. function declaration

// function multiply( num1, num2){
//     return num1*num2;
// }
// console.log( multiply(40,50));
// console.log( multiply(4,5));
// console.log( multiply(34,5));
// console.log( multiply(40,0));
// console.log( multiply(40,45));

//2. function expression
//*** interview*write a function to check whether the number is even or odd

// const evenOddChecker = function(num){
//     if(num%2==0){
//         console.log(`${num} is even`);
//     }else{
//         console.log(`${num} is odd` );
        
//     }
// }
// evenOddChecker(30);

//3. arrow function(2015 ES6)- preference

// const multiply=(num1,num2)=>console.log(num1*num2);
// multiply(3,4);

// const evenOddChecker=(num)=>{
//     return num % 2 == 0 ? "number is even": "number is odd"
// };

// console.log(evenOddChecker(5));

//self invoking function : this u will use only when  to do some urgent task without bothering the other code

// (function(){
//     console.log(4**4);
// })();

// (()=>{
//     let secret="1234";
//     console.log("Inside:", secret);
// })
// //not accessible outside the function
// console.log("outside:" , secret);

