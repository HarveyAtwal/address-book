describe('ContactListCtrl', function() {

  var ctrl, scope, rootScope, location;

  var sharedData = {
    contact: {
      "firstname":"Cameron",
      "lastname":"Dubas",
      "phone":"6047280012",
      "address":"289 Abbott St., Vancouver, BC, V3M 2L7",
      "email":"cameron@changeheroes.com"
    }
  };

  beforeEach(angular.mock.module('app'));
  beforeEach(angular.mock.inject(function($controller, $rootScope, $location) {
    location = $location;
    rootScope = $rootScope;
    scope = $rootScope.$new();
    ctrl = $controller('ContactListCtrl as contactList', {$scope: scope, sharedData: sharedData});
  }));

  it('should exist', function() {
    expect(scope.contactList).toBeDefined();
  });
});