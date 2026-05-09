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
const item=document.querySelectorAll(".item");
console.log(item);
