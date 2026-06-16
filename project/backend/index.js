import express from "express";
//const express=require("express")
// import cors from 'cors'

const app = express();
//anyone can access data
//app.use(cors())

//specified for only one 
// var CorsOptions ={
//     origin: 'http://localhost:5173',
//     optionsSuccessStatus: 200 
// }


app.get("/",(req,res)=>{
    res.send("server is ready")
})
// cors(CorsOptions), <= when used var CorsOptions add this ext to /jokes below
app.get("/api/jokes", (req,res)=>{
   const jokes = [
        {
            "id": 1,
            "type": "general",
            "setup": "Why don't scientists trust atoms?",
            "punchline": "Because they make up everything!"
        },
        {
            "id": 2,
            "type": "general",
            "setup": "What do you call fake spaghetti?",
            "punchline": "An impasta!"
        },
        {
            "id": 3,
            "type": "general",
            "setup": "Why did the scarecrow win an award?",
            "punchline": "Because he was outstanding in his field!"
        },
        {
            "id": 4,
            "type": "general",
            "setup": "What do you call cheese that isn't yours?",
            "punchline": "Nacho cheese!"
        },
        {
            "id": 5,
            "type": "general",
            "setup": "Why can't a bicycle stand on its own?",
            "punchline": "Because it's two-tired!"
        },
        {
            "id": 6,
            "type": "general",
            "setup": "What do you call a bear with no teeth?",
            "punchline": "A gummy bear!"
        },
        {
            "id": 7,
            "type": "general",
            "setup": "Why did the math book look sad?",
            "punchline": "Because it had too many problems."
        },
        {
            "id": 8,
            "type": "general",
            "setup": "What do you call a sleeping bull?",
            "punchline": "A bulldozer!"
        },
        {
            "id": 9,
            "type": "general",
            "setup": "Why did the coffee file a police report?",
            "punchline": "It got mugged!"
        },
        {
            "id": 10,
            "type": "general",
            "setup": "How does a penguin build its house?",
            "punchline": "Igloos it together!"
        }
    ];

    res.json(jokes);
});
const port= process.env.PORT || 5000;

app.listen(port, () =>{
    console.log(`Serving at port ${port}`);
    
})