angular.module('app').factory('contacts', function($http) {
  // Return the promise the $http.get returns
  // as we can asynchrnously update the values
  return $http.get('/assets/contacts.json');
});