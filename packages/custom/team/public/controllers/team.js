(function() {
    'use strict';

    /* jshint -W098 */

    function TeamController($scope, Global, Team, $stateParams) {
        $scope.global = Global;
        $scope.package = {
            name: 'team'
        };

        $scope.checkCircle = function() {
            Team.checkCircle($stateParams.circle).then(function(response) {
                $scope.res = response;
                $scope.resStatus = 'info';
            }, function(error) {
                $scope.res = error;
                $scope.resStatus = 'danger';
            });
        };
    }

    angular
        .module('mean.team')
        .controller('TeamController', TeamController);

    TeamController.$inject = ['$scope', 'Global', 'Team', '$stateParams'];

})();
