
angular.module('userRegistrationApp').controller('UserUpdateCtrl', ['$scope', 'StorageService', '$uibModalInstance','user', function ($scope, StorageService, $uibModalInstance, user) {

     $scope.user = user;
     /*$scope.selected = {
     selectedUser: $scope.userInfo
     };*/

    $scope.update = function () {
        $uibModalInstance.close();
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
}]);