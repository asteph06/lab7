// express initialization
 
 

/*

 var express = require('express');
var app = express();

var requests = require('requests');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json()); // using body-parser
app.use(bodyParser.urlencoded({ extended: true }));

console.log("hello world!!!");

app.get('/a',function(req,resp){
	console.log("got a request");
})



*/







// adding express declarations
var express = require('express');
var app = express();

//
var bodyParser = require('body-parser');
var request    = require('request');
//var http 	   = require('http');

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, resp) {
	resp.header("Access-Control-Allow-Origin");
	resp.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	var url = "http://developer.mbta.com/lib/rthr/red.json";
	request(url,function(error,respy,body){
		obj = JSON.parse(body);
		resp.send(obj);
	});
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

