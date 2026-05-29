// console.log("hello Nodejs");

// REPEL(read eveluate ptint loop) -playground
// used for quick calculations, sometimes debuggings

//special ability in nodejs-
//  like file handling-fs


//1.Built-in module
const { log } = require("console");
const fs= require("fs")

const path=require ("path")
const os=require("os")
//write file replaces the previous data
// fs.writeFile("data.text", "Hello Students\n", (err)=>{
//     if(err) throw err;
//     console.log("file written succressfully");
    
// })
// //wants to add data next line we use appendFile
// fs.appendFile("data.text", "Hello 530", (err)=>{
//     if(err) throw err;
//     console.log("file written succressfully");
    
// })
// fs.readFile("data.txt","utf-8", (err,data)=>{
//     if(err) throw err;
//     console.log(data);
    
// })


// console.log(path.basename(__filename));//name of the file
// console.log(path.dirname(__filename));//path of the file directory
// console.log(path.extname(__filename));

// console.log(os.platform());
// console.log(os.cpus());
// console.log(os.freemem());

//creating a server
const http = require("http");

const server = http.createServer((request, response) => {
    response.end("<h1>hello from server</h1>");
});

const PORT = 5555;

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

