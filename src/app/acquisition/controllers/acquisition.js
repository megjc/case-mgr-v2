(function() {
    'use strict';

    angular
        .module('apps.casemgr')
        .controller('casemgr', casemgr);

    casemgr.$inject = ['casemgrSrv', '$location'];

	function casemgr(casemgrSrv, $location){
		var vm = this
    vm.acquisitions = []
    vm.show = show
		
    getAcquisitions()


    /**
     * getAcquisitions get acquisitions
     */
    function getAcquisitions(){
      casemgrSrv
        .getAcquisitions()
        .then(function(acquisitions){
          vm.acquisitions = acquisitions
        }).catch(function(error){
          vm.acquisitions = []
        })
    }

    /**
     * [show description]
     * @param  {[type]} id [description]
     * @return {[type]}    [description]
     */
    function show(id){
      $location.path('/dashboard/apps/casemgr/acquisition/details/'+ id)
    }
  }
})();
