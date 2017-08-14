(function() {
    'use strict';

    angular
        .module('apps.casemgr')
        .controller('casemgr', casemgr);

    casemgr.$inject = ['casemgrSrv', '$location', '$anchorScroll' , '$window', '$q', '$routeParams'];

	function casemgr(casemgrSrv, $location, $anchorScroll, $window, $q, $routeParams){
		var vm = this

    vm.acquisitions = []
    vm.parishes = [] 
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
      if($location.path() === '/dashboard/apps/casemgr/acquisition/details/'+$routeParams.id){
        // getById($routeParams.id)
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
     * [getParishes description]
     * @return {[type]} [description]
     */
    function getParishes(){
      casemgrSrv
        .getParishes()
        .then(function(parishes){
          vm.parishes = parishes
        }).catch(function(error){
          vm.parishes = []
          vm.showSuccess = false
          vm.showError = true
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
     * [postOwners description]
     * @return {[type]} [description]
     */
    function postOwners(){
      return $q((resolve, reject) => {
        casemgrSrv
          .createOwner(vm.ownersData).then(function(res){
            console.log('function: postOwners')
            if(res.data){
              vm.propertiesData.owner_id = res.data
              vm.receiptData.owner_id = res.data
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
              vm.ownersData.property_id = res.data
              vm.receiptData.property_id = res.data
              console.log('property_id' + res.data)
              resolve()
            }
          }).catch(function(error){
              reject(error)
          })
      })
    }

    /**
     * [postReceipts description]
     * @return {[type]} [description]
     */
    function postReceipts(){
      return $q((resolve, reject) => {
        casemgrSrv
          .createReceipt(vm.receiptData).then(function(res){
            console.log('function: postReceipts') 
            if(res.data){
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
      postAcquisitions()
        .then(() => postProperties()
            .then(() => postOwners()
              .then(() => postReceipts()
                .then(() => {
                  vm.showSuccess = true
                  vm.showError = false
                  reset()
                }))))
        .catch(() => {
          vm.showSuccess = false
          vm.showError = true})
      $window.scrollTo(0, 0)
      $location.hash('top')
      $anchorScroll()
    }

    /**
     * [getById description]
     * @param  {[type]} id [description]
     * @return {[type]}    [description]
     */
    function getById(id){
      
    }
    
    /**
     * [reset description]
     * @return {[type]} [description]
     */
    function reset(){
      vm.acquisitionsData = {remarks: null,  file_id: null, title: null,  status: null,  location: null,
                            start_date: null, end_date: null}
      vm.ownersData = {first_name: null, last_name: null, property_id: null, accession_id: null}
      vm.propertiesData = {description: null, volume: null, folio: null, is_liber: null, owner_id: null, parish_id: null}
      vm.parishesData = {id: null, title: null}
      vm.receiptData = {owner_id: null, property_id: null, amount: null, currency: null, receipt_date: null}
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
