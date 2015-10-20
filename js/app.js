var app = angular.module('myApp', []);

app.controller('myController', ['$scope', 'MyLogin', function ($scope, MyLogin) {
	var ref = new Firebase("https://glaring-heat-3574.firebaseio.com/");
	var REST_back = "https://glaring-heat-3574.firebaseio.com/";


	$scope.user = {
		username: "",
		pass: ""
	};

	console.log(this.user);


	$scope.onLoginClick = function () {
		MyLogin.login($scope.user.username, $scope.user.pass);
	}

}]);

app.factory('MyLogin', ['$http', function ($http) {
	return {
		login: function (user, pass) {
			$http({
				url: "https://api.parse.com/1/login",
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					"X-Parse-Application-Id": "AE7xZQU6JUDmrVuDKSHijRK00occMaAumpojNbSP",
					"X-Parse-REST-API-Key": "TYD1uV2dQm0wZVgzC54NavGbRjPjqSlqaUBB98A9"
				},
				data: {
					username: user,
					password: pass
				}

			}).success(function (status) {
				console.log(status);
			}).error(function (status) {
				console.log(status);
			});
		}
	}
}]);