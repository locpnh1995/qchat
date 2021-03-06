
//expessJS
var express = require("express");
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = 3701;

app.use(express.static(__dirname+'/public'));
//template Jade
app.set("views",__dirname+"/resources/views/template");
app.set("view engine","jade");
app.engine("jade",require("jade").__express)
app.get("/",function(req,res){
	res.render("index");
});

io.on('connection',function(socket){
	socket.emit('message',{message: 'welcome to the chat'});
	socket.on('send',function (data){		
		io.emit('message',data);
	});
});

/*io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});*/

http.listen(port, function(){
  console.log('listening on *:'+port);
});

//socket.io, send data

//var io = require("socket.io").listen(app.listen(port));




console.log("dir: "+__dirname);
console.log("file: "+__filename);