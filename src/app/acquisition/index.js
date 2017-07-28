(function() {
    'use strict'
    angular.module('apps.casemgr', []).config(config)

    function config($routeProvider) {
      $routeProvider.when('/dashboard/apps/casemgr/acquisition',{
        templateUrl: 'templates/casemgr/list.html',
        controller: 'casemgr',
        controllerAs: 'vm',
        title: 'Acquisition List'
      }).when('/dashboard/apps/casemgr/acquisition/edit/:id',{
        templateUrl: 'templates/casemgr/edit.html',
        controller: 'casemgr',
        controllerAs: 'vm',
      }).when('/dashboard/apps/casemgr/acquisition/create',{
        templateUrl: 'templates/casemgr/create.html',
        controller: 'casemgr',
        controllerAs: 'vm',
      })
    }
})();
