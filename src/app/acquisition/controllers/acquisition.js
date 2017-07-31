(function() {
    'use strict';

    angular
        .module('apps.casemgr')
        .controller('casemgr', casemgr);

    casemgr.$inject = ['casemgrSrv', '$location'];

	function casemgr(casemgrSrv, $location){
		var vm = this
    vm.acquisitions = []
    vm.acquisitionsData = {}
    vm.ownersData = {}
    vm.propertiesData = {}
    vm.show = show
    vm.post = post;
		
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

    function postAcquisition(){
      casemgrSrv
        .createAcquisition(vm.acquisitionsData).then(function(res){
            vm.message = {
              success: res.data.success,
              text: res.data.text,
              show: true
            }
            if(res.data.success == true) {
            }
          }).catch(function(error){

          })
    }

    function postOwner(){
      casemgrSrv
        .createOwner(vm.ownersData).then(function(res){
          vm.message = {
            success: res.data.success,
            text: res.data.text,
            show: true
          }
          if(res.data.success == true){
            
          }
        }).catch(function(error){

        })
    }

    function postPorperty(){ 
      casemgrSrv
        .createProperty(vm.propertiesData).then(function(res){
          vm.message = {
            success: res.data.success,
            text: res.data.text,
            show: true
          } 
          if(res.data.success == true){
            
          }
        }).catch(function(error){

        })
    }

    function post(){
      postAcquisition()
      postPorperty()
      postOwner()
      $anchorScroll()
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
