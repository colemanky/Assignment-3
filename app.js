const express = require('express');
const app = express();
const http = require('http');
const server = require('http').createServer(app);

const LISTEN_PORT = 8080;

server.listen(LISTEN_PORT);
app.use(express.static(__dirname + '/public')); //set root path of server ...

//routes
app.get('/index', function(req,res) {
    res.sendFile(__dirname + '/public/index.html');
});