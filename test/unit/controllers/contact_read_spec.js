describe('ContactReadCtrl', function() {

  var ctrl, scope, rootScope;

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
  beforeEach(angular.mock.inject(function($rootScope, $controller) {
    rootScope = $rootScope;
    scope = $rootScope.$new();
    ctrl = $controller('ContactReadCtrl as contactRead', {$scope: scope, sharedData: sharedData});
  }));

  it('should exist', function() {
    expect(scope.contactRead).toBeDefined();
  });

  it('should have the same sharedData', function() {
    expect(scope.contactRead.sharedData).toBe(sharedData);
  });
});