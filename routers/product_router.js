var express = require("express")
		models 	= require("../models")

var User = models.users
var Product = models.products


var productRouter = express.Router();


productRouter.post('/', function(req,res){
	Product
		.create(req.body)
		.then(function(newProduct){
			res.send(newProduct)
		});
});

productRouter.get('/', function(req,res){
	Product
	  .findAll()
	  .then(function(products){
	  	res.send(products)
	  });
});

module.exports = userProduct