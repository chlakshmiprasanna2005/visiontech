// chapter-12

// chrome, firefox, opera, edge,...
// JS Engine- programs and calculation...
// chrome- V8 engine, Firefox- Spider Monkey, Edge-Chakra

// JavaScript=> it is a high level interpreted dynamic programming language
// ->high level - easy to understand
// ->interpreted - code gets converted line by line
// ->programming lang - set of instructions
// ***it is also called as single threaded synchronous language- in single thread only total no. of lines of code are executed.


// =>js can be added in 2 ways -> first - script, second - linking
// ->3 ways of output - alert(pop-up), concole.log(seen in console(inspevt any web page and go to console)), prompt
// --> interactive dialog boxes
// 1.window.prompt(): Displays a dialog box with a text field, asking for user input.
// 2.window.confirm(): Displays a dialog box with "OK" and "Cancel" buttons, used to get a boolean (true/false) confirmation from the user.


// variables=> used to store values
// 3 ways to create a variable
// 1. var 2. let 3. const
// Rules to follow=>
// 1. variables are case(uppercase lowercase) sensitive - score and Score are different
// 2. variables cannot start with number- 12name is not correct, name12 is correct
// 3. allowed - a to z, A to Z,_ , $
// 4.reserved keywords cannot be used (let, const, function, return, if)
// 5. variables cannot contain hyphen(_)

// chapter-13

// var,let and const - to create any variables

// var - traditional way of declaring variables --we should not use is much
//declare and initialize
//var/let/const variablename = value

//declare
// var baby;
// //initialization
// baby="girl";

// var baby = "boy";


// if(true){
//     var a=10;

// }

// console.log(a);
//avoid using var bcoz it gets re-declared and initialized

// let my_name="john";
//  my_name="ram";

//re-declaeation is not possible but re-initialization is possible with let

// console.log(my_name);

// const pi=3.14;
// console.log(pi)

// const email="chlakshmiprasanna2005";
// console.log(email);

//var can be redeclared and reinitialized
//let can be reinitialized but cannot redlared
//const caannot redeclared neither it should be reinitialized


//what is a data type in js?
//data type means type of data a variable is holding
//data types are categorized in 2 ways- primitive and non-primitive data types

//1.primitive data types
//number-2,5.55
//string-characters inside double or single quotes
//boolean - true or false ( no single or double quotes used)
//undefined - value has not been assigned
//null- when u dont have a value you intentionally put null
//symbol
//BigInt

//2.non primitive datatypes
//array-[]
//objects-{}
//functions

//undefined
// let mykey ;
// console.log(mykey);

// //null
// let box= null;
// console.log(box);


//non-primitive datatype

//Array- data structures-denoted in []
//obect-{}
let student_data={
    name:"lakshmi",
    roll :530,
    age:21,
    city:"guntur", 
    is_student:true,
};
console.log(student_data);
