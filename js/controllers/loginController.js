MetronicApp.controller('loginController',['$scope','$rootScope','$state',function($scope,$rootScope,$state){
    
   $scope.getDetails=function(){
       
       $state.go('app.dashboard');
   }
   
}]);
       