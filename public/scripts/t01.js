var app = angular.module("app",[]);

app.controller("msg",['$scope',function($scope){



}]);

//****** with compile, controller , pre and post ************

// app.directive('message',function($interpolate){
//
//   return {
//     compile: function(tElement,tAttributes){
//       console.log(tAttributes.text + ' -In compile');
//       tElement.css("border","1px solid #C0C0C0");
//
//       return {
//         pre: function(scope, iElement, iAttributes){
//              console.log(iAttributes.text + "-In Pre ");
//
//         },
//         post: function(scope,iElement,iAttributes){
//             console.log(iAttributes.text + "-In Post ");
//             if(iAttributes.text==="3"){
//               iElement.css("border","1px solid #FF0000");
//             }
//             iElement.on('click',scope.btnClick);
//         }
//       };
//     },
//     controller: function($scope,$element,$attrs){
//       var v=$interpolate($attrs.text)($scope)
//
//       console.log(($attrs.text + '-In Controller'));
//       console.log(v + '-Interpolated text');
//
//       $scope.btnClick=function(){
//         alert(v);
//       }
//     }
//   }
// });


// *********without compile******************
// app.directive('message',function($interpolate){
//
// return {
// link:  {
//         pre: function(scope, iElement, iAttributes){
//              console.log(iAttributes.text + "-In Pre ");
//
//         },
//         post: function(scope,iElement,iAttributes){
//             console.log(iAttributes.text + "-In Post ");
//             if(iAttributes.text==="3"){
//               iElement.css("border","1px solid #FF0000");
//             }
//             iElement.on('click',scope.btnClick);
//         }
//     },
//     controller: function($scope,$element,$attrs){
//       var v=$interpolate($attrs.text)($scope)
//
//       console.log(($attrs.text + '-In Controller'));
//       console.log(v + '-Interpolated text');
//
//       $scope.btnClick=function(){
//         alert(v);
//       }
//     }
//     }
// });


//****** with compile, controller and post ************
// app.directive('message',function($interpolate){
//
//   return {
//     compile: function(tElement,tAttributes){
//       console.log(tAttributes.text + ' -In compile');
//       tElement.css("border","1px solid #C0C0C0");
//
//      // post-link function
//       return function(scope,iElement,iAttributes){
//             console.log(iAttributes.text + "-In Post ");
//             if(iAttributes.text==="3"){
//               iElement.css("border","1px solid #FF0000");
//             }
//             iElement.on('click',scope.btnClick);
//           }
//         },
//     controller: function($scope,$element,$attrs){
//       var v=$interpolate($attrs.text)($scope)
//
//       console.log(($attrs.text + '-In Controller'));
//       console.log(v + '-Interpolated text');
//
//       $scope.btnClick=function(){
//         alert(v);
//       }
//     }
//   }
// });


//*********Just post-link function***********
app.directive('message',function($interpolate){

     // post-link function
      return function(scope,iElement,iAttributes){
            console.log(iAttributes.text + "-In Post ");
            if(iAttributes.text==="3"){
              iElement.css("border","1px solid #FF0000");
            }
            iElement.on('click',scope.btnClick);
          }
});
