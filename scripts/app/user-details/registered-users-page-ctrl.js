
angular.module('userRegistrationApp').controller('UserCtrl', ['$scope', 'StorageService', 'userList','$uibModal','$log', function ($scope, StorageService, userList, $uibModal, $log) {
    $scope.userDetail = StorageService.getAll();

    $scope.delete = function (index) {
        StorageService.delete(index);
    };

    $scope.animationsEnabled = true;

    $scope.open = function (user) {
        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'scripts/app/user-details/updateUserInfo.html',
            controller: 'UserUpdateCtrl',
            size: 'lg',
            resolve: {
                user: function () {
                    return user;
                }
            }
        });
        modalInstance.result.then(function (selectedUser) {
            $scope.userInfo = selectedUser;
        }, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });
        $scope.toggleAnimation = function () {
            $scope.animationsEnabled = !$scope.animationsEnabled;
        };
    };
}]);
