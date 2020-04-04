const express   = require('express');
const app       = express();
const http      = require('http');
const server    = http.createServer(app);
const socketIO  = require('socket.io')(server);
        

const LISTEN_PORT = 8080; //make sure greater than 3000. Some ports are reserved/blocked by firewall ...
var users = []

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

    //find out type of user and either add them to the game or boot them
    socket.emit("pollRequest")
    socket.on("pollResponse", function(data){
        let response = {id: socket.id, type: data, ready: false}

        switch (users.length){
            case 0:
                users.push(response)
                socket.emit("waitingForPlayer", data)
                break
            case 1:
                if (response.type != users[0].type){
                    users.push(response)
                } else {
                    socket.emit("duplicateUserType", data)
                }
                break
            default:
                socket.emit("tooManyPlayers", data)
                break
        }   
    })

    socket.on('disconnect', function(data) {
        console.log(socket.id + ' has disconnected');
        
        //remove disconnected player from users list
        for(let i = 0; i < users.length; i++){
            if (users[i].id == socket.id){
                users.splice(i, 1)
                socketIO.sockets.emit("partnerDisconnected", data)
            }
        }
    })

    socket.on('ready', function(){
        
        //mark that user as ready
        for(let i = 0; i < users.length; i++){
            if (users[i].id == socket.id){
                users[i].ready = true

                console.log(users[i].type + " is ready")
            }
        }
        if (users.length == 2){
            //check if both players are ready, if true start game
            if (users[0].ready == true && users[1].ready == true){
                socketIO.sockets.emit("gameStart")
            }
        }
    })


    socket.on("ImageToSocket", function(data){
        socketIO.sockets.emit("imageToStudent", data)
    });
    socket.on("xy", function(data){
        socketIO.sockets.emit("xyToProfessor", data)
    });
    socket.on("hotToSocket", function(data){
        socketIO.sockets.emit("hotToStudent", data)
    });
    socket.on("coldToSocket", function(data){
        socketIO.sockets.emit("coldToStudent", data)
    });
    socket.on("artifactSend", function(data){
        socketIO.sockets.emit("artifactToStudent", data)
        console.log("sent " + data)
    });
    socket.on("gameOverSend", function(data){
        socketIO.sockets.emit("gameOverToProfessor", data)
    });
});

//finally, start server
server.listen(LISTEN_PORT);
console.log('listening to port: ' + LISTEN_PORT);