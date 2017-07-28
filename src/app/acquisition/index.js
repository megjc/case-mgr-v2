(function() {
    'use strict'
    angular.module('apps.casemgr', []).config(config)

    function config($routeProvider) {
      $routeProvider.when('/dashboard/apps/casemgr/acquisition',{
        templateUrl: 'templates/casemgr/list.html',
        controller: 'casemgr',
        controllerAs: 'vm',
        title: 'Acquisition List'
      }).when('/dashboard/apps/casemgr/acquisition/create',{
        templateUrl: 'templates/casemgr/create.html',
        controller: 'casemgr',
        controllerAs: 'vm',
      }).when('/dashboard/apps/casemgr/acquisition/details/:id',{
        templateUrl: 'templates/casemgr/details.html',
        controller: 'casemgr',
        controllerAs: 'vm',
      })
    }
})();
