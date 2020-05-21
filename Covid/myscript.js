const URL="https://covid19.mathdro.id/api/";

let app = angular.module("myapp",[]);

app.controller("myctr",($scope,$http)=>

{ 
    //this is controller
    $scope.title ="COVID CASES";

    //calling API with HTTP

    $http.get(URL).then( (response)=>{
        //succes s
       $scope.cdata=response.data;
    },
    (error)=>{
        //error
        console.log(error);

    }
 );

//Country-wise

$scope.get_cd = ()=>{

    let country = $scope.cases;

    if(country==''){
        return;
    }

    $http.get(`${URL}/countries/${country}`).then( 
        (response)=>{
        console.log(response.data);    
       $scope.cd = response.data;
    },
    (error) => {
        //error
        console.log(error);

    }
    );
};

}); 

