
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path')
  , WebSocketServer = require('ws').Server

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3001);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);
app.get('/users', user.list);

var httpServer = http.createServer(app);

var wss = new WebSocketServer({server: httpServer});
var conns = [];

wss.on('connection', function(ws) {
  console.log("connected");
  conns.push(ws);

  ws.on('message', function(data){
    console.log("receive message %s", data);
    for(var i = 0, l = conns.length; i < l; i+=1) {
      conns[i].send(data);
    }
  });

  ws.on('close', function(){
    console.log("disconnected");
    var idx = conns.indexOf(ws);
    if(idx !== -1) conns.splice(idx,1)
  });
});



httpServer.listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
