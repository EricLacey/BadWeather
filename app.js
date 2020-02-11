const express   = require('express');
const app       = express();
const http      = require('http');
const server    = http.createServer(app);
const socketIO  = require('socket.io')(server);

const LISTEN_PORT = 8080; //make sure greater than 3000. Some ports are reserved/blocked by firewall ...

app.use((express.static(__dirname + '/public'))); //set root dir to the public folder

//routes
app.get('/', function(req,res) {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/student', function(req,res) {
    res.sendFile(__dirname + '/public/student.html');
});

app.get('/professor', function(req,res) {
    res.sendFile(__dirname + '/public/professor.html');
});

app.get('/test', function(req,res) {
    res.sendFile(__dirname + '/public/test.html');
});

//websocket stuff
socketIO.on('connection', function(socket) {
    console.log(socket.id + ' has connected!');

    socket.on('disconnect', function(data) {
        console.log(socket.id + ' has disconnected');
    });

    socket.on("ImageToSocket", function(data){
        socketIO.sockets.emit("imageToStudent", data)
    });


});

//finally, start server
server.listen(LISTEN_PORT);
console.log('listening to port: ' + LISTEN_PORT);