angular.module('userRegistrationApp').directive('validatePassword', function () {
    return {
        require: 'ngModel',
        link: function (scope, elm, attrs, ctrl) {
            function matchPassword(viewValue) {
                console.log(viewValue);
                if(viewValue != ctrl.$$parentForm.password.$viewValue){
                    ctrl.$setValidity('noMatch', false);
                }else{
                    ctrl.$setValidity('noMatch', true);
                }
                return viewValue;
            };
            ctrl.$parsers.unshift(matchPassword);
        }
    }
});

