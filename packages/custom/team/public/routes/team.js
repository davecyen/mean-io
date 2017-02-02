(function() {
    'use strict';

    function Team($stateProvider) {
        $stateProvider.state('team example page', {
            url: '/team/example',
            templateUrl: 'team/views/index.html'
        }).state('team circles example', {
            url: '/team/example/:circle',
            templateUrl: 'team/views/example.html'
        });
    }

    angular
        .module('mean.team')
        .config(Team);

    Team.$inject = ['$stateProvider'];

})();
