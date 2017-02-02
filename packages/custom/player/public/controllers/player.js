(function() {
    'use strict';

    /* jshint -W098 */

    function PlayerController($scope, Global, Player, $stateParams) {
        $scope.global = Global;
        $scope.package = {
            name: 'player'
        };

        $scope.checkCircle = function() {
            Player.checkCircle($stateParams.circle).then(function(response) {
                $scope.res = response;
                $scope.resStatus = 'info';
            }, function(error) {
                $scope.res = error;
                $scope.resStatus = 'danger';
            });
        };
    }

    angular
        .module('mean.player')
        .controller('PlayerController', PlayerController);

    PlayerController.$inject = ['$scope', 'Global', 'Player', '$stateParams'];

})();
