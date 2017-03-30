var app = angular.module("app",[]);

app.controller("emp",['$scope','$rootScope',function($scope,$rootScope){

$scope.a=1;
$scope.b=2;
$scope.c=4;

$scope.$watch('a',function(newVal,oldVal){
  if(newVal != oldVal){
    console.log("a modified to"+newVal);

  }
});

$scope.$watch('b',function(newVal,oldVal){
  if(newVal != oldVal){
    console.log("b modified to"+newVal);

  }

});

$scope.$watch('c',function(newVal,oldVal){
  if(newVal != oldVal){
    console.log("c modified to"+newVal);
    if($scope.c >50){
      $scope.a=1000;
    }
  }
});

$rootScope.$watch(function(){
  console.log("digest cycle started");
});

}]);
