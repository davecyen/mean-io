(function() {
    'use strict';

    /* jshint -W098 */

    function UpdateController($scope, Global, Update, $stateParams) {
        $scope.global = Global;
        $scope.package = {
            name: 'update'
        };

        $scope.checkCircle = function() {
            Update.checkCircle($stateParams.circle).then(function(response) {
                $scope.res = response;
                $scope.resStatus = 'info';
            }, function(error) {
                $scope.res = error;
                $scope.resStatus = 'danger';
            });
        };
    }

    angular
        .module('mean.update')
        .controller('UpdateController', UpdateController);

    UpdateController.$inject = ['$scope', 'Global', 'Update', '$stateParams'];

})();
