var app = angular.module('myApp', ['firebase']);

app.controller('myController', function($scope, $firebaseArray) {
	var fID = new Firebase("https://glaring-heat-3574.firebaseio.com/");
	
	$scope.data = $firebaseArray(fID);
	
	$scope.defaultuser = "admin@mail.com";
	$scope.defaultpass = "pass";
	
	
	
	$scope.onClick = function()
	{
		console.log($scope.data);	
	}
	
	
});