var app = angular.module("app",[]);

app.controller("sample",['$scope','$parse',function($scope,$parse){

  $scope.a=10;
  $scope.b=20;
  $scope.emp={
    name:"charles",
    address:{
        city:"austin"
    }
  };

   $scope.demoEval= function(){
  //
  // //   alert( "Result: "+($scope.a + $scope.b));
  // //   alert("Result: "+ $scope.$eval("a + b"));
  // //  alert( $scope.$eval("emp.address.city"));
  // //   var r= $scope.$eval("a * b * 3 * c",{
  // //     c: 5
  // //   });
  // //   alert(r);
  //
  //   var r =$scope.$eval(function(scope,locals){
  //     return scope.a * scope.b * locals.c;
  //   },{c:2});
  //   alert(r);
   }

   $scope.demoParse = function (){
    //  var f= $parse("a * b");  //return a function
    //  var r=f($scope);
    //  alert(r);

    //  alert($parse("a * b")($scope));
    alert($parse("a * b")({
      a:2,
      b:3
    }));
   }

   $scope.demoInterpolate= function(){

     
   }

}]);
