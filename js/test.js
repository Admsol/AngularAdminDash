describe("AngularAdminTests", function () {

    var scope, controller;

    beforeEach(function () {
        module('myApp');
        inject(function ($controller) {
            controllerInjector = $controller;
        });
        scope = {};
        var smt = controllerInjector('myController', {
            $scope: scope
        });
    });

    it("User Init Test", function () {
        expect(scope.user.username).toEqual("");

    });
    it("Parse Signup Test", function () {
        
    });

});