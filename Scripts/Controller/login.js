angular.module('alaa1',[])
 .component('login',{
 	controller: function (){
 		this.click = function() {
 		var password = document.getElementById('password').value;
			var username = document.getElementById('username').value;
			console.log("username")
			$.ajax({
				type: "POST",
				url:'http://127.0.0.1:3000/login',
				data: { password : password, username : username},
				success: function() {
					console.log('mya mya')
				},
				dataType: "application/json"
		
			});
			$location.path('/test.html');
		}	
 	},



	template : `
<center><div class="container"> <h2>Login</h2> </div>
<form> <div class="form-group"><label for="pwd">username:</label>
<input id = 'username' type="text" class="form-control" name="username"><br /><br />
<div ><label for="pwd">Password:</label> 
<input id='password' class="form-control"  type="password" name="password"></div>
<br> <br>
<button ng-click="$ctrl.click()" class="btn btn-default"> login </button>
</div


`
})