var app=angular.module("mylist",[]);
app.controller("ctr",function($scope){

    $scope.items = ["ABC","Efg","Hij"];
    $scope.newitem= "";
    $scope.pushitem= function(){
        if($scope.newitem != ""){
        $scope.items .push($scope.newitem);
        $scope.newitem="";    
        }
    }
    $scope.remove = function(index){
        $scope.items.splice(index,1);

    }

});