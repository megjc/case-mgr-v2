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
    vm.post = post
    vm.postAcquisition = postAcquisition
		vm.jsDateToSql = jsDateToSql
    
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
            if(res.data.id){
              vm.ownersData.accession_id = res.data.id
            }
          }).catch(function(error){

          })
    }

    function postParish(){
      casemgrSrv
        .createAcquisition(vm.parishesData).then(function(res){
            if(res.data.id){
              vm.propertiesData.parish_id = res.data.id
            }
          }).catch(function(error){

          })
    }


    function postOwner(){
      casemgrSrv
        .createOwner(vm.ownersData).then(function(res){
          if(res.data.id){
            vm.propertiesData.parish_id = res.data.id
          }
        }).catch(function(error){

        })
    }

    function postProperty(){ 
      casemgrSrv
        .createProperty(vm.propertiesData).then(function(res){
          if(res.data.id){
            vm.ownersData.parish_id = res.data.id
          }
        }).catch(function(error){

        })
    }

    function post(){
      postAcquisition()
      postParish()
      postProperty()
      postOwner()
      $anchorScroll()
    }

    function jsDateToSql(date){
      return date.getUTCFullYear() + '-' +
            ('00' + (date.getUTCMonth() + 1)).slice(-2) + '-' +
            ('00' + date.getUTCDate()).slice(-2) + ' ' +
            ('00' + date.getUTCHours()).slice(-2) + ':' +
            ('00' + date.getUTCMinutes()).slice(-2) + ':' +
            ('00' + date.getUTCSeconds()).slice(-2);
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
