// common js module
// const express = require("express")

//es module
import express, { request, response } from 'express';
const server = express()

// HTTP methods - get, post, push, delete
// we also use put and patch 

// routes 

// API- end points(or own api- like dummy data ):

server.get('/', (request,response)=>{
    response.send("<h1>hello from server</h1>");
})

server.get('/about',(request, response)=>{
    response.send("<h1>about page</h1>");
})
server.get('/services',(request, response)=>{
    response.send("<h1>services page</h1>");
})

server.get('/api',(request, response)=>{
    response.json({"name":"Lakshmi"});
})

server.listen(4000, ()=>{
    console.log("server running on port 4000");
    
})
