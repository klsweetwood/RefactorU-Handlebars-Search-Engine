var express = require('express');
var bodyParser = require('body-parser');
var searchController = require('./controllers/search.js');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/searchData');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser());

app.get('/', function(req, res) {
	res.render('index');
});

app.get('/search', searchController.findResults);

var server = app.listen(3000, function() {
	console.log('Express server listening on port ' + server.address().port);
});
