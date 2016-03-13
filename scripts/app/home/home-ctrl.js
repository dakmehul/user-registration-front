/**
 * Created by dakbhavesh on 07-Mar-16.
 */
/*
 function HomeCtrl($scope,storageService) {

 $scope.inputText = 'shah';
 $scope.changeText=function(){
 storageService.txt = $scope.inputText;
 console.log(storageService.txt);
 }
 };*/

angular.module('userRegistrationApp').controller('HomeCtrl', ['$scope','StorageService', function($scope,storageService) {


    $scope.inputText = storageService.currentText;

      /*$scope.changeText=function(){
        storageService.currentText = $scope.inputText;
        console.log(storageService.txt);
     }*/
 }]);
