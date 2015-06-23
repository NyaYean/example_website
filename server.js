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
		  .findAll({include: Product})
		  .then(function(product){
		  	res.send(product);
		  });
});

app.get('/user/:id', function(req,res){
	User
		.findById(req.params.id)
		.then(function(products){
			res.send(products)
		});
});

app.put('/user/:id', function(req,res){
	var userID = req.params.id;
	var userParams = req.body;

	User
		.findById(userID)
		.then(function(user){
			user
			.update(userParams)
			.then(function(updatedUser){
				res.send(updatedUser);
			});
		});
});

app.delete("/user/:id", function(req,res){
	User
		.findById(req.params.id)
		.then(function(user){
			user
			.destroy()
			.then(function(){
				res.send(user)
			});
		});
});

app.post('/products', function(req,res){
	Product
		.create(req.body)
		.then(function(newProduct){
			res.send(newProduct)
		});
});

app.get('/products', function(req,res){
	Product
	  .findAll()
	  .then(function(products){
	  	res.send(products)
	  });
});





var server = app.listen(3000, function(){
	console.log('Running on something')
})