(function() {
    'use strict';

    angular
        .module('intranet', [
            'ngRoute',
            'ngMessages',
            'apps.casemgr'
        ]).config(config).run(updateTitle)

      function config($routeProvider, $httpProvider){
        $routeProvider.otherwise({redirectTo: '/dashboard/apps/casemgr/acquisition'})
      }

      function updateTitle($rootScope){
        $rootScope.$on("$routeChangeSuccess", function(event, currentRoute, previousRoute) {
              $rootScope.title = currentRoute.title
        });
      }
})();
