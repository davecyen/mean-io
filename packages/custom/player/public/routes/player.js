(function() {
    'use strict';

    function Player($stateProvider) {
        $stateProvider.state('player example page', {
            url: '/player/example',
            templateUrl: 'player/views/index.html'
        }).state('player circles example', {
            url: '/player/example/:circle',
            templateUrl: 'player/views/example.html'
        });
    }

    angular
        .module('mean.player')
        .config(Player);

    Player.$inject = ['$stateProvider'];

})();
