(function() {
    'use strict';

    /* jshint -W098 */

    function HomepageController($scope, Global, Homepage, $stateParams) {
        $scope.global = Global;
        $scope.package = {
            name: 'homepage'
        };

        $scope.checkCircle = function() {
            Homepage.checkCircle($stateParams.circle).then(function(response) {
                $scope.res = response;
                $scope.resStatus = 'info';
            }, function(error) {
                $scope.res = error;
                $scope.resStatus = 'danger';
            });
        };
    }

    angular
        .module('mean.homepage')
        .controller('HomepageController', HomepageController);

    HomepageController.$inject = ['$scope', 'Global', 'Homepage', '$stateParams'];

})();
