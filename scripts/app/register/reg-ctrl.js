/**
 * Created by dakbhavesh on 07-Mar-16.
 */
/*app.controller('RegistrationController', ['$scope', */

/*function RegistrationCtrl ($scope ,storageService) {*/
angular.module('userRegistrationApp').controller('RegistrationCtrl', ['$scope', '$location', 'StorageService','$window', function ($scope, $location, StorageService, $window) {


//    $scope.registeredUsers = [];
//    $scope.registeredUsers = StorageService.list;
//   $scope.registeredUsers = [];
    //var registeredUsers = [];
    //$scope.color='Red'
    /*var _selected;*/

    /*$scope.address = undefined;
    $scope.states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
        'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine',
        'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada',
        'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma',
        'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah',
        'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];*/
    $scope.userInfo = {
        /*srNo: 0,
        firstName: 'Mehul',
        lastName: 'Shah'*/
    };

    $scope.fnSearchObject = {};
    $scope.lnSearchObject={};
    $scope.createAccount = function () {
        if($scope.userRegistrationForm.$valid){
            StorageService.add($scope.userInfo);
            $scope.registeredUsers = [];
            $scope.registeredUsers = StorageService.getAll();
            $scope.userInfo.srNo = $scope.registeredUsers.length;
            console.log(StorageService.list);
            $scope.userInfo = {};
            $location.url('/users');
        }
    };
}]);