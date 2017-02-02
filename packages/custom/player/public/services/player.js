(function() {
    'use strict';

    function Player($http, $q) {
        return {
            name: 'player',
            checkCircle: function(circle) {
                var deferred = $q.defer();

                $http.get('/api/player/example/' + circle).success(function(response) {
                    deferred.resolve(response);
                }).error(function(response) {
                    deferred.reject(response);
                });
                return deferred.promise;

            }
        };
    }

    angular
        .module('mean.player')
        .factory('Player', Player);

    Player.$inject = ['$http', '$q'];

})();
