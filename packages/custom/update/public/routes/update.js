(function() {
    'use strict';

    function Update($stateProvider) {
        $stateProvider.state('update example page', {
            url: '/update/example',
            templateUrl: 'update/views/index.html'
        }).state('update circles example', {
            url: '/update/example/:circle',
            templateUrl: 'update/views/example.html'
        });
    }

    angular
        .module('mean.update')
        .config(Update);

    Update.$inject = ['$stateProvider'];

})();
