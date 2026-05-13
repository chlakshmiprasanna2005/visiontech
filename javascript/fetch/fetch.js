const button=document.querySelector("#btn");
const container=document.querySelector("#container");

button.addEventListener("click", fetchUsers)

async function fetchUsers(){
    container.innerHTML="loading..."
    try{
        const response=await fetch("https://dummyjson.com/users");
        const {users}=await response.json();

        container.innerHTML="";
        users.forEach( (user)=> {
            const div= document.createElement("div");
            div.innerHTML=`
                <h1>${user.firstName}</h1> 
                <h3>${user.lastName}</h3>
                <h4>${user.email}</h4>
                <span> Age: ${user.age}</span>
            `;
            container.appendChild(div)
            
        });
    }
    catch{
        console.log("error");
        container.innerHTML="error fetching data";
    }

}