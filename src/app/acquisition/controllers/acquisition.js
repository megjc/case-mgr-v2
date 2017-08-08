(function() {
    'use strict';

    angular
        .module('apps.casemgr')
        .controller('casemgr', casemgr);

    casemgr.$inject = ['casemgrSrv', '$location', '$anchorScroll' , '$window', '$q'];

	function casemgr(casemgrSrv, $location, $anchorScroll, $window, $q){
		var vm = this

    vm.acquisitions = [] 
    vm.show = show
    vm.post = post

    activate()

    /**
     * [activate description]
     * @return {[type]} [description]
     */
    function activate(){
      if($location.path() === '/dashboard/apps/casemgr/acquisition'){
        getAcquisitions()
      }
      if($location.path() === '/dashboard/apps/casemgr/acquisition/create'){
        reset()
      }
    }

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
     * [postAcquisitions description]
     * @return {[type]} [description]
     */
    function postAcquisitions(){
      return $q((resolve, reject) => {              
        casemgrSrv
          .createAcquisition(vm.acquisitionsData).then(function(res){
              console.log('function: postAcquisitions')
              if(res.data){
                vm.ownersData.accession_id = JSON.stringify(res.data)
                console.log('accession_id ' + vm.ownersData.accession_id)
                resolve()
              }
            }).catch(function(error){
              reject(error)
            })
      })
    }

    /**
     * [postParishes description]
     * @return {[type]} [description]
     */
    function postParishes(){
      return $q((resolve, reject) => {              
        casemgrSrv
          .createParish(vm.parishesData).then(function(res){
              console.log('function: postParishes')
              if(res.data){
                vm.propertiesData.parish_id = res.data
                console.log('parish_id ' + res.data)
                resolve()
              }
            }).catch(function(error){
              reject(error)
            })
      })
    }

    /**
     * [postOwners description]
     * @return {[type]} [description]
     */
    function postOwners(){
      return $q((resolve, reject) => {
        casemgrSrv
          .createOwner(vm.ownersData).then(function(res){
            console.log('function: postOwners')
            if(res.data){
              vm.propertiesData.owners_id = res.data
              console.log('owners_id ' + res.data)
              resolve()
            }
          }).catch(function(error){
              reject(error)
          })
      })
    }

    /**
     * [postProperties description]
     * @return {[type]} [description]
     */
    function postProperties(){
      return $q((resolve, reject) => {
        casemgrSrv
          .createProperty(vm.propertiesData).then(function(res){
            console.log('function: postProperties') 
            if(res.data){
              vm.ownersData.propery_id = res.data
              console.log('propery_id ' + res.data)
              resolve()
            }
          }).catch(function(error){
              reject(error)
          })
      })
    }

    /**
     * [post description]
     * @return {[type]} [description]
     */
    function post(){
      postParishes()
      postAcquisitions()
        .then(() => postOwners()
            .then(() => postProperties()
              .then(() => {
                vm.showSuccess = true
                vm.showError = false
                reset()
              })))
        .catch(() => {
          vm.showSuccess = false
          vm.showError = true})
        console.log(vm.showSuccess)
      $window.scrollTo(0, 0)
      // $location.hash('top')
      // $anchorScroll()
    }
    
    /**
     * [reset description]
     * @return {[type]} [description]
     */
    function reset(){
      vm.acquisitionsData = {remarks: null,  file_id: null, title: null,  status: null,  location: null,
                            start_date: null, end_date: null}
      vm.ownersData = {first_name: null, last_name: null, property_id: null, accession_id: null}
      vm.propertiesData = {description: null, volume: null, folio: null, is_liber: null, owner_id: null }
      vm.parishesData = {title: "-Select a Parish-"}
      vm.receiptData = {amount: null}
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
