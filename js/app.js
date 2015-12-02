var app = angular.module('myApp', []);

app.controller('myController', ['$scope', 'MyLogin', function ($scope, MyLogin) {


    var loginResult;

    $scope.user = {
        username: "",
        pass: "",
        token: "none",
        status: "none"
    };

    $scope.onLoginClick = function () {
        loginResult = MyLogin.login($scope.user.username, $scope.user.pass).then(function (data) {
            console.log(data);

            $scope.user.token = data.data.sessionToken;
            $scope.user.status = data.statusText;
        });

    }

}]);

app.controller('myController2', ['$scope', function ($scope) {
    $scope.info = "Important information";
}]);

app.factory('MyLogin', ['$http', function ($http) {
    return {
        login: function (user, pass) {
            return $http({
                url: "https://api.parse.com/1/users",
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    "X-Parse-Application-Id": "AE7xZQU6JUDmrVuDKSHijRK00occMaAumpojNbSP",
                    "X-Parse-REST-API-Key": "TYD1uV2dQm0wZVgzC54NavGbRjPjqSlqaUBB98A9"
                },
                data: {
                    username: user,
                    password: pass
                }

            }).success(function (res) {
                return res;
            }).error(function (res) {
                console.log("ERROR:" + res);
            });

        }
    }
}]);