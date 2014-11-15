ebusiness.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        //
        // Now set up the states
        $stateProvider
            .state('navbar', {
                abstract: true,
                url: '',

                // Note: abstract still needs a ui-view for its children to populate.
                // You can simply add it inline here.
                templateUrl: 'states/navbar/navbar.html'
            });
    }
]);

ebusiness.controller('NavbarController', ['$scope', '$log',
    function($scope, $log) {
        $log.log('NavbarController');
    }
]);