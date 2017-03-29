var app = angular.module("app",[]);

app.controller("msg",['$scope',function($scope){

$scope.a=1;
$scope.b=2;
$scope.c=4;

// $scope.updateC=function(){
//   $scope.c=$scope.a * 4;
// }
//
// $scope.$watch('a',function(newVal,oldVal){
//
//   if(newVal != oldVal){
//     $scope.b=$scope.a * 2;
//   }
// })
//
// $scope.$watch('b',function(newVal,oldVal){
//
//   if(newVal != oldVal){
//     $scope.c=$scope.b * 2;
//   }
// })
//
//
// $scope.$watch('c',function(newVal,oldVal){
//
//   if(newVal != oldVal){
//     console.log("Updated C to "+ newVal);
//   }
// })

// $scope.$watchGroup(['a','b'],function(newVal,oldVal){
//
//   if(newVal != oldVal){
//     $scope.c=$scope.b * $scope.a;
//   }
// })


$scope.o = {
  a:1,
  b:2,
  c:4
};

$scope.$watch('o',function(newVal,oldVal){
  console.log("inside watch");
  if(newVal != oldVal){
    $scope.o.c=$scope.o.a * $scope.o.b;
  }
},true);
}]);
