(function() {
    'use strict';

    angular
        .module('apps.casemgr')
        .service('casemgrSrv', casemgrSrv);

    casemgrSrv.$inject = ['$http', '$routeParams']

    function casemgrSrv($http){
    	var services = {
            getAcquisitions : getAcquisitions,
            createAcquisition : createAcquisition,
            createOwner : createOwner,
            createProperty : createProperty,
            createReceipt : createReceipt
    	}

        /**
         * getAcquisitions gets the acquisitions from database if possible else returns error message
         * @return Object returns the acquisitions from database if possible else returns error message
         */
        function getAcquisitions(){
            return $http.get('/api/acquisitions')
                .then(handleSuccess)
                .catch(handleError)
        }
        /**
         * [createAcquisition description]
         * @param  {[type]} data [description]
         * @return {[type]}      [description]
         */
        function createAcquisition(data){
            return $http.post('/api/acquisitions', data)
        }

        /**
         * [createOwner description]
         * @param  {[type]} data [description]
         * @return {[type]}      [description]
         */
        function createOwner(data){
            return $http.post('/api/owners', data)
        }

        /**
         * [createAcquisition description]
         * @param  {[type]} data [description]
         * @return {[type]}      [description]
         */
        function createProperty(data){
            return $http.post('/api/properties', data)
        }

        /**
         * [createReceipt description]
         * @param  {[type]} data [description]
         * @return {[type]}      [description]
         */
        function createReceipt(data){
            return $http.post('/api/receipts', data)
        }

        /**
         * handleSuccess retrieves data from the database if there is no error
         * @param  Object res the data that is retrieved from the database
         * @return Object the data from a database
         */
        function handleSuccess(res){
            return res.data
        }

        /**
         * handleError returns an error message if there is a problem retrieving data from the database
         * @param  Object res [description]
         * @return Object     error message
         */
        function handleError(res){
            return res
        }
    
    	return services;
    }
})();