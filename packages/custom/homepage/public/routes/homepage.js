(function() {
    'use strict';

    function Homepage($stateProvider) {
        $stateProvider.state('homepage example page', {
            url: '/homepage/example',
            templateUrl: 'homepage/views/index.html'
        }).state('homepage circles example', {
            url: '/homepage/example/:circle',
            templateUrl: 'homepage/views/example.html'
        });
    }

    angular
        .module('mean.homepage')
        .config(Homepage);

    Homepage.$inject = ['$stateProvider'];

})();
