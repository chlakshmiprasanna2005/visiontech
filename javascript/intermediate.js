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

//array of objects - JSON data
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

