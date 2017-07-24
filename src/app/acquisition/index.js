(function() {
    'use strict'
    angular.module('apps.casemgr', []).config(config)

    function config($routeProvider) {
      $routeProvider.when('/dashboard/apps/casemgr/acquisition',{
        templateUrl: 'templates/casemgr/list.html',
        controller: 'casemgr as vm',
        title: 'Acquisition List'
      })
    }
})();
