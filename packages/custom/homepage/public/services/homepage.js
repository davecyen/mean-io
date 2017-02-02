(function() {
    'use strict';

    function Homepage($http, $q) {
        return {
            name: 'homepage',
            checkCircle: function(circle) {
                var deferred = $q.defer();

                $http.get('/api/homepage/example/' + circle).success(function(response) {
                    deferred.resolve(response);
                }).error(function(response) {
                    deferred.reject(response);
                });
                return deferred.promise;

            }
        };
    }

    angular
        .module('mean.homepage')
        .factory('Homepage', Homepage);

    Homepage.$inject = ['$http', '$q'];

})();
