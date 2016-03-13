/**
 * Created by dakbhavesh on 07-Mar-16.
 */

/*var app = angular.module('userRegistrationApp', ['ui.router','ui.bootstrap']);*/

angular.module('userRegistrationApp').service('StorageService', function() {

    this.currentText = {};
    var userList = [];

    this.getAll = function(){
        return userList;
    }

    this.add = function(user){
        userList.push(user);
    };

    /*return{
        getList: function() {
            return this.list = [];
        }
    }*/
});