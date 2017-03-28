var app = angular.module("app",[]);

app.controller("emp",['$scope','$http','$log','empService',function($scope,$http,$log,empService){

  $scope.doSearchByEmp=function(){
     console.log("doSearchByEmp",$scope.searchEmpno);
      empService.findEmployeeById($scope.searchEmpno).then(function(resp){
        console.log("resp",resp);
        $scope.empno=resp.empno;
        $scope.ename=resp.ename;
        $scope.sal=resp.sal;
        $scope.deptno=resp.deptno;
        $scope.hiredate=resp.hiredate;
        $scope.dob=resp.dob;
        console.log(  $scope.dob,resp.dob);
      });
  };

      empService.findEmployees().then(function(resp){
        console.log("resp",resp);
        $scope.employees=resp;

      });

}]);

//service
app.service('empService',['$http','$log', function($http,$log){

  $log.log('instantiating empService');


  this.findEmployeeById=function(empId){
    return $http({
      url: '/employees/'+empId,
      method:'GET'
    }).then(function(resp){
      $log.log(resp.data);
        return resp.data[0];
    },function(resp){
      $log.error("error occurred");
    });
  };

  this.findEmployees=function(){
    return $http({
      url: '/employees',
      method:'GET'
    }).then(function(resp){
      $log.log(resp.data);
        return resp.data;
    },function(resp){
      $log.error("error occurred");
    });
  };

}])



//provider

// app.provider('calcService',function(){
// this.$get=function($log,$http){
//
// var oCalcService={};
//   oCalcService.getSum=function(a,b){
//       return $http({
//         url: '/Sum?a=' + a + '&b=' + b,
//         method:'GET'
//       }).then(function(resp){
//         $log.log(resp.data);
//           return resp.data;
//       },function(resp){
//         $log.error("error occurred");
//       });
//     };
//     return oCalcService;
// };
//
// });
//
//
// app.config(['calcServiceProvider',function(calcServiceProvider){
//
// }]);
