ebusiness.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        //
        // Now set up the states
        $stateProvider
            .state('dashboard', {
                url: "/dashboard",
                parent: "navbar",
                templateUrl: "states/navbar/dashboard/dashboard.html",
                controller: "DashboardController"
            });
    }
]);

ebusiness.controller('DashboardController', ['$scope', '$mdSidenav', '$log', '$mdDialog',
    function($scope, $mdSidenav, $log, $mdDialog) {
        $log.log('DashboardController');

        $scope.loginDialog = function(ev) {
            $mdDialog.show({
                templateUrl: 'dialogs/login/login.html',
                targetEvent: ev,
                controller: 'LoginController',
                clickOutsideToClose: false,
                escapeToClose: false
            }).then(function() {
                $scope.alert = 'You said "Okay".';
            }, function() {
                $scope.alert = 'You cancelled the dialog.';
            });
        };
    }
]);