(function() {
    'use strict';

    function Update($http, $q) {
        return {
            name: 'update',
            checkCircle: function(circle) {
                var deferred = $q.defer();

                $http.get('/api/update/example/' + circle).success(function(response) {
                    deferred.resolve(response);
                }).error(function(response) {
                    deferred.reject(response);
                });
                return deferred.promise;

            }
        };
    }

    angular
        .module('mean.update')
        .factory('Update', Update);

    Update.$inject = ['$http', '$q'];

})();
