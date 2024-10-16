let express = require('express');
let app = express();
let serv = require('http').Server(app);

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/bezero/index.html');
});

serv.listen(2000, () => {
    console.log("UP");
});



let i=0;
let io = require("socket.io")(serv);

io.sockets.on('connection', function(socket){
	i++;
	console.log(i + ". konexioa");
    //document.write(i + ". konexioa")
    socket.emit('ID', i);



    socket.on('jasoDet', function(izena){
        console.log("ID: "+i+" "+"Izena: "+ izena);
    });
});