angular
    .module("ngapp")
    .controller("appcontroller",function($scope, appfactory)
    {
        $scope.data = appfactory.getApp();

    });