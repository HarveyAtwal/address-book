angular.module('app').factory('contacts', function($http) {
  return $http.get('/assets/contacts.json');
});