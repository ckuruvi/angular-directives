var app = angular.module("app",[]);

app.controller("msg",['$scope','$rootScope',function($scope,$rootScope){

$scope.data=[
  {v:17,r:0},
  {v:24,r:0},
  {v:32,r:0},
  {v:48,r:0},
]

}]);

app.directive('message',function(){
  return{
    templateUrl:'view/info-msg.htm',
    compile: function(){
      return function(scope,iElement,iAttribute,controller){
        iElement.find("#btnSum").on("click",scope.btnClick);
      }
    },
    controller: function($scope, $element, $attrs){
      $scope.btnClick=function(){
        $scope.o.r=$scope.o.v * $scope.o.v;
        $scope.$digest();
      }
    }
  }
});
