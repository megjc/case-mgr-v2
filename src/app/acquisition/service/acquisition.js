(function() {
    'use strict';

    angular
        .module('apps.casemgr')
        .service('casemgrSrv', casemgrSrv);

    casemgrSrv.$inject = ['$http']

    function casemgrSrv($http){
    	var services = {
            getAcquisitions : getAcquisitions,
            createAcquisition : createAcquisition,
            createOwner : createOwner,
            createProperty : createProperty
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

        function createAcquisition(){
            return $http.post('/api/acquisitions', data)
        }

        function createOwner(){
            return $http.post('/api/owners', data)
        }

        function createProperty(){
            return $http.post('/api/properties', data)
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