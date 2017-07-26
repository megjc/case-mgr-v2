(function() {
    'use strict';

    angular
        .module('apps.casemgr')
        .controller('casemgr', casemgr);

    casemgr.$inject = ['casemgrSrv'];

	function casemgr(casemgrSrv){
		var vm = this
    vm.acquisitions = []
    getAcquisitions();
		
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
  }
})();
