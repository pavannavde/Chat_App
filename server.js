const express = require("express");
const app=express();

//import http
const http = require("http");
//this is the combination of server and http
const server= http.createServer(app);
// I got my Server by destructing "require("socket.io")"
const { Server } = require("socket.io");

// this is how you are actually creating io
const io = new Server(server); // this io should be instance that is associated with http and express
const PORT = 8801;

io.on("connection", (socket) => {
    socket.on("sent message",(data)=>{
        io.emit("sent message",data);
    })
});

// app.use is used to run middlewares
// pure express app to send the html folder
app.use(express.static('public')); // pure express to server my frontend from pure express app

// http + express should listen
server.listen(PORT); // combined server is listening at my PORT 