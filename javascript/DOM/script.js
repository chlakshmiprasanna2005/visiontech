//different ways of targeting or accesing the element
//1. getElementById
//2. getElementByClassName
//3. getElementsByTagname
//4. querySelector -imp mostly used
//5. querySelectorAll

// let title=document.getElementById("title");
// console.log(title.textContent);
// title.textContent = "hello Javascript";


// const items = document.getElementsByClassName("item");
// console.log(items);

// items[0].textContent = "HTML"
// items[1].textContent = "javascript"
// items[2].textContent = "python"

//note: whwnever u are using querySelector and alla then for id and class , u use . or # to identification
// const item=document.querySelectorAll(".item");
// console.log(item);

//chapter-22
//15/4

//types of nodes
//1.element node- h1,div,p,table,form
//2.text node-"hello world"(content)
//3. attribute node-class="box", href="ww.linkedin.com"

//***querySelector is used to target  */
// const heading = document.querySelector("h1");

//innerHTML, innerText and textContent - there are used to change the content of the element directly

// heading.innerText="learning DOM"
// heading.innerHTML="learning dom 1"
// heading.textContent="learning dom 2"

// console.log(heading.innerText);//shows content visible on screen
// console.log(heading.innerHTML);//shows complete text node + code(inner HTML tags)
// console.log(heading.textContent);//whatever content present inside tag & it will target everything

// heading.style.color="red";
//in css we write the two word properties with -, in js we use camel case convention
// heading.style.backgroundColor="beige";
// heading.style.padding="20px"
// heading.style.fontFamily="arial"
// heading.style.fontFamily="10px"
// heading.style.margin="10px"
// heading.style.textAlign="center"

// heading.setAttribute("class", "head foot")
// console.log( heading.getAttribute("id"));

//Events- action that happen in browser, js can listen and respond to that event
//EventListener: code that reacts to it

//common types of events
//1.mouse event
//2.keyboard event
//3.form
//4.window

// const button = document.querySelector("button");
// const heading=document.querySelector("h1");
// button.addEventListener("mouseover", function(){
//     // console.log("clicked"); 
//     heading.textContent="hello DOM"
// });

// const box= document.querySelector("div");

// box.style.width="200px"
// box.style.height="150px"
// box.style.backgroundColor="blue"
// box.style.marginTop="20px"

// box.addEventListener("mouseover", ()=>{
//     box.style.backgroundColor="red"
// });

// box.addEventListener("mousedown", ()=>{
//     box.style.backgroundColor="black"
//     box.innerText="java script"
//     box.style.color="white"
// });

//form events
const input = document.querySelector("input")

// input.addEventListener("input", (e)=>{
//     console.log("Typing: ", e.target.value);
// });

const form=document.querySelector("form");

form.addEventListener("submit", (e)=>{
    e.preventDefault()//it will stop your form by getting submtted automatically
    console.log("form submitted");
})

//keyup,keydown,keypress,scroll- keyboard events











