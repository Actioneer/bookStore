var bookStoreServices = angular.module('bookStoreServices', ['ngResource']);

bookStoreServices.factory('Books', ['$resource',
  function($resource){
    return $resource('http://localhost\:8081	/books', {}, {
      query: {method:'GET', params:{}, headers: {'Accept': '*/*'}, isArray:true}
    });
  }]);
