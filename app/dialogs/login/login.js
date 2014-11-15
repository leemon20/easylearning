/*ebusiness.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        //
        // Now set up the states
        $stateProvider
            .state('login', {
                url: "/login",
                templateUrl: "states/login/login.html",
                controller: 'LoginController'
            });
    }
]);*/

ebusiness.controller('LoginController', ['$scope', 'loginService', '$log', '$mdDialog',
    function($scope, loginService, $log, $mdDialog) {
        $scope.user = {
            email: null,
            password: null
        };

        $scope.login = function() {
            $log.log("logging in...");
            loginService.login($scope.user).then(function(data) {
                $log.log(data);
            });
        }
    }
]);