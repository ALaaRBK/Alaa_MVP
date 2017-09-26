var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var morgan = require('morgan');
var db = require(__dirname +'/database');

var app = express();
var port = 3000;




app.listen( port , function() {
	console.log('Server conect on Port ' + port)
})


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));
app.use(morgan('dev'));

app.post('/login', function (req, res) {

	var username = req.body.username;
	var password = req.body.password;
	
  	

	var  posts = new db({ username : username , password : password} )
  		posts.save(function (err){
  			if(err){
  				console.log('maaaa23 ' + err)
  			}
  			
  		})

	
})

app.get('/',function(req,res) {
	db.find({},function(err,result){
  	console.log(result)
   res.send(JSON.stringify(result))
  })
})



app.get('/login',function(req,res) {

  res.sendFile( __dirname +'/./Scripts/templeate/login.html');
  
})










