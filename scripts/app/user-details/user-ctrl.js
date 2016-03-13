/**
 * Created by dakbhavesh on 08-Mar-16.
 */

angular.module('userRegistrationApp').controller('UserCtrl', ['$scope','StorageService','userList', function($scope, StorageService, userList) {
    $scope.userDetail = StorageService.getAll();
}]);
