(function() {
    'use strict';

    function Team($http, $q) {
        return {
            name: 'team',
            checkCircle: function(circle) {
                var deferred = $q.defer();

                $http.get('/api/team/example/' + circle).success(function(response) {
                    deferred.resolve(response);
                }).error(function(response) {
                    deferred.reject(response);
                });
                return deferred.promise;

            }
        };
    }

    angular
        .module('mean.team')
        .factory('Team', Team);

    Team.$inject = ['$http', '$q'];

})();
