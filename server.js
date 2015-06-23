var express = require('express');
var bodyParser = require('body-parser');
var models = require(__dirname + '/models');
var logger = require('morgan');

var User = models.users;
var Product = models.products;

var userRouter = require('./routers/user_router.js');
var productRouter = require('./routers/product_router.js');

var app = express();

app.use(bodyParser());
app.use(logger('dev'));

app.use(express.static(__dirname + '/public'));

app.use("/users", userRouter);
app.use("/products", productRouter);

module.exports = app;


var server = app.listen(3000, function(){
	console.log('Running on something')
})