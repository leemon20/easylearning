ebusiness.factory('loginService', ['$http', '$log', '$q',
    function($http, $log, $q) {
        return {
            /**
             * login
             * @param {Object} credentials
             */
            login: function(credentials) {
                var deferred = $q.defer();
                $http.post('../../backend/Controller.php', {
                    'token': null,
                    'username': 'mirko',
                    'password': 'Mirko123456#'
                })
                    .success(function(data) {
                        deferred.resolve(data);
                        $log.log(data);
                    }).error(function(msg, code) {
                        deferred.reject(msg);
                        $log.error(msg, code);
                    });
                return deferred.promise;
            }
        };
    }
]);