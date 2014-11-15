 ebusiness.config(['$stateProvider', '$urlRouterProvider',
     function($stateProvider, $urlRouterProvider) {
         //
         // Now set up the states
         $stateProvider
             .state('list', {
                 url: "/list",
                 parent: "dashboard",
                 templateUrl: "states/searchable/dashboard/list/list.html",
                 controller: ['$scope',
                     function($scope) {
                         $scope.items = ["A", "List", "Of", "Items"];
                     }
                 ]
             });
     }
 ]);