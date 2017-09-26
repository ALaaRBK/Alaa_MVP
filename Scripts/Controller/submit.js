angular.module('alaa')

.component('submit',{
	controller: function() {
		this.arr = [ ];
		this.click=function (){
			this.data = document.getElementById('ButSubmit').value;
			this.arr.push(this.data);
			console.log(this.arr)
			// $.ajax({
			// 	type: "POST",
			// 	url:'http://127.0.0.1:3000/',
			// 	data: {data : this.data },
			// 	success: function() {
			// 		console.log('mya mya')
			// 	},
			// 	dataType: "application/json"
			// });

		}
 	}, 	


 	template : `<div class="submit">
 	<input class="post-fild" id = 'ButSubmit' type="text" />
 	<button ng-click="$ctrl.click()">
 	Post
 	</button>
 	</div>
 	<br> <br>
 	<center>

<div class="visible-lg bg-success">
	
<div ng-repeat="post in $ctrl.arr track by $index">{{post}} </div>
 
</div>
 	`
 })
