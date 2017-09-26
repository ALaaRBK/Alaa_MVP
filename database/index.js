var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/myapp');
mongoose.Promise = global.Promise;

var db = mongoose.connection
db.on('open',function(){
	console.log('database connect');

})
db.on('err',function(err){
	console.log('database canont connect becuese ' + err)
})

var userSchema = mongoose.Schema({
	username : {type :String , unique : true},
	password : String,
})

//var postSchema = mongoose.Schema({
// ingredients:[
//       {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
//     ],
    //userpost : String
//})
 
  var User = mongoose.model('User',userSchema);
 //var Post = mongoose.model('Post', postSchema);

//module.exports = Post;
 module.exports = User;