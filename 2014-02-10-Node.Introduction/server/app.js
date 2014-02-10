'use strict';

var express = require('express');
var home = require('./routes/home');
var app = express();

app.set('port', process.env.PORT || 4000);
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);

app.get('/', home.index);
app.get('/name', home.name);
app.get('/favcolor', home.favcolor);
app.get('/sum/:a/:b', home.sum);
app.get('/drink/:name/:age', home.drink);

var server = require('http').createServer(app);
server.listen(app.get('port'), function(){
  console.log('Node server listening. Port: ' + app.get('port'));
});

