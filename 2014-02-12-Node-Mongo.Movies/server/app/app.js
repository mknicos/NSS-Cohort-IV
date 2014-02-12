'use strict';

var dbname = 'imdb';
var port = process.env.PORT || 4000;

var debug = require('./lib/request-debug');
var express = require('express');
var home = require('./routes/home');
var movies = require('./routes/movies');
var app = express();

/* --- pipeline begins */
app.use(require('./lib/mongodb-connection-pool').initialize(dbname, app));
app.use(express.logger(':remote-addr -> :method :url [:status]'));
app.use(require('./lib/cors'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);

app.get('/', debug, home.index);
app.post('/movies', debug, movies.create);
app.get('/movies', debug, movies.index);
/* --- pipeline ends   */

var server = require('http').createServer(app);
server.listen(port, function(){
  console.log('Node server listening. Port: ' + port + ', Database: ' + dbname);
});

