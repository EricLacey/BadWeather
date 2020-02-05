const express   = require('express');
const app       = express();
const http      = require('http');
const server    = http.createServer(app);

const LISTEN_PORT = 8080; //make sure greater than 3000. Some ports are reserved/blocked by firewall ...

app.use((express.static(__dirname + '/public'))); //set root dir to the public folder

//routes
app.get('/', function(req,res) {
    res.sendFile(__dirname + '/public/index.html');
});

//finally, start server
server.listen(LISTEN_PORT);
console.log('listening to port: ' + LISTEN_PORT);