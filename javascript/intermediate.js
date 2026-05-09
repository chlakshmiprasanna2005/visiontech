//chapter 15
//operators

//atithmetic operators -> +, -, /, *, % ,**

//comparision operators
// *****// == vs ===****
// let a=10;
// let b="ram";
// console.log(a+b);

// console.log(a==b);
// console.log(a===b);

// let x=10;
// let y="30";

// //number+string
// //string operator
// console.log(x+y);//1030
// console.log(y-x);//30-10

//Arrays
//thre are 2 ways of creating an array
//1.

// let storeroom=["table","chairs", true, false, 50];

// //2. constructor way
// let score= new Array(2,3,4,5);
// console.log(score);


// console.log(storeroom.push("hat"));
// console.log(storeroom);

// console.log(storeroom.pop());
// console.log(storeroom);


// console.log(storeroom.unshift("hat"));
// console.log(storeroom);

// console.log(storeroom.shift());
// console.log(storeroom);

// storeroom[3]="ram";
// console.log(storeroom);

// let newarray=["hello" ,"world"]
// console.log(newarray.join(" "));


// let a=[1,2,3];
// let b=["ram","sita"];
// console.log(a.concat(b));



//chapter 16

//array of objects - JSON data- collection of values in array- key value pair
//array[]   object{}

// let users=[
//     {name: "prasanna", isUser:true},
//     {name:"madhu",isUser:false},
//     {name:"sowmya",isUser:true},
//     {name:"bhargavi",isUser:false},
//     {name:"jahnavi",isUser:true},
//     {name:"mahi",isUser:false},

// ];
// let names=users.map((user)=>user.name);//map will read each and every user
// console.log(names);
// // console.log(users[1])

// let numbers=[1,2,3,4,5];
// let multiply=numbers.map(number=>number*3);//each number is multiplied by user
// console.log(multiply);

//filter- is used to filter records
// let numbers=[2,3,,5,67,8,9];
// let even =numbers.filter(numbers => numbers%2==0);
// console.log(even);

// let users=[
//     {name:"A",active:true},
//     {name:"B",active:false},
//     {name:"C",active:true},

// ];
// let activeUsers=users.filter((user)=>user.active);
// console.log(activeUsers.length);

//*intervie question**Reduce-

// let cart=[
//     {item:"top",price:300},
//     {item:"pant",price:700},
//     {item:"chain",price:200},
//     {item:"watch",price:900},
// ];
// //reduce
// let total=cart.reduce((sum,item)=>sum+item.price,0);
// console.log(total);

//slice
// let items=[1,2,3,4,5,6];
// let page1=items.slice(0,3);
// console.log(page1);//1,2,3
// let page1=items.slice(-2);
// console.log(page1);//5,6

//**task:splice,some,every,inclused,findIndex,at,charAt

// let users=[
//     {id:1,name:"A"},
//     {id:2,name:"b"},
//     {id:3,name:"c"},
//     {id:4,name:"d"},
// ];
// let user=users.find((user)=>user.id==2);
// console.log(user);

//flat- clumsy data to single array

// let users=[[1,29,4],["bhanu",6,7,3,],["ramya",false,3,90]]
// console.log(users.flat())

//sort- ascending order
//  let users=[1,29,4,"bhanu",6,7,3,"ramya",false,3,90];
// console.log(users.sort());


//b-a descending order
//a-b ascending order
// let randomNum=[1,23,33,111,22,34,445,55,22,556];
// console.log(randomNum.sort((a,b)=>b-a));

//chapter-16
//Conditional statements(4)

//1.if
// let age=20;
// if(age>18){
//     console.log("you can vote");   
// }

//2.if else
// let age=10;
// if(age>18){
//     console.log("you can vote");   
// }
// else{
//     console.log("you cannot vote");
// }


//3.if else if
// let age=30;
// if(age<18){
//     console.log("you cannot vote");   
// }
// else if(age=18){
//     console.log("you cannot vote");
// }
// else{
//     console.log("you can vote");
// }

//4.switch case
// let day="friday"
// switch(day){
//     case "monday":
//         console.log("work mood");
//     break;
//     case "tuesday":
//         console.log("workingg");
//     break;
//     case "wednesday":
//         console.log("waiting for friday");
//     break;
//     case "thursday":
//         console.log("1 more day");
//     break;
//     case "friday":
//         console.log("yay! its friday");
//     break;
//     default:
//         console.log("mention weekdays only");
//     break;
// }
    
 //ternary operator
//  let age=28;
//  let result= age>=18? "yes you are an adult" :"you  are a teen " 
//  console.log(result);
    
    
// control flow or loops
// loops are used to repeate a block of code automatically untillthe condition is true

//1.for loop
// for(let index=0; index<11;index++){
//     console.log(index);
// }   

//2.while loop
//3.do while

// chapter-18

//2.while
// let i=1;
// while(i<100){
//     console.log(i);
//     i++;//incrementing or decrementing is very important in while loop else it will hang yor system   
// }

//3. do while
// let num=10;
// do{
//     console.log("hello from do whileloop");   
// }
// while(num<5);

//forof and forin ***interview question**

//for in loop- used to loop over keys(index/property names ), it can be used with objects and array
//we can use it when there are objects

// const student={
//     //key :value
//     name:"rahul",
//     age:22,
//     course:"MERN",
// };
// for(let key in student){
//     console.log(key);
//     console.log(student[key]);
//     console.log(key+":"+student[key]);
// }

// let fruits=["apple","banana","grapes"];
// for(let index in fruits){
//     console.log(index);
//     console.log(fruits[index]);
    
// }

//everything in javascript is an object
//for of loop is used to loop over "values" directly.. Arrays and string
//can use it when there are arrays and strings

// const price=[100,200,300,334,550]
// for(const p of price){
//     console.log("price is "+p);
// }

// let my_name="LAKSHMI PRASANNA";
// for(let char of my_name){
//     console.log(char);
// }

//for each- use it when there is an array
// const users=["prrasanna","janu","bhagi","soyi"];
// users.forEach((user)=>{
//     console.log("session started "+user);
// });

const orders=[
    {id:1, item:"shirt",price:"300"},
    {id:2, item:"short",price:"500"},
    {id:3, item:"googles",price:"2000"}

];
orders.forEach((order)=>{
    //`` - backticks (string interpolation)
    console.log(`order ${order.id}:${order.item} cost${order.price}`);
    
})
