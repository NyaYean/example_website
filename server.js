var express = require('express');
var bodyParser = require('body-parser');
var models = require(__dirname + '/models');
var logger = require('morgan');

var User = models.users;
var Product = models.products;

var app = express();

app.use(bodyParser());
app.use(logger('dev'));
app.use(express.static(__dirname + '/public'));

app.post('/users', function(req, res){
		User
			.create(req.body)
			.then(function(newUser){
				res.send(newUser)
			});
});

app.get('/users', function(req, res){
		User
		  .findAll()
		  .then(function(product){
		  	res.send(product);
		  });
});

app.post('/products', function(req,res){
	Product
		.create(req.body)
		.then(function(newProduct){
			res.send(newProduct)
		})
})




var server = app.listen(3000, function(){
	console.log('Running on something')
})