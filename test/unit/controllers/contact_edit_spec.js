describe('ContactEditCtrl', function() {

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
  beforeEach(angular.mock.inject(function($location, $rootScope, $controller) {
    location = $location;
    rootScope = $rootScope;
    scope = $rootScope.$new();
    ctrl = $controller('ContactEditCtrl as contactEdit', {$scope: scope, sharedData: sharedData});
  }));

  it('should exist', function() {
    expect(scope.contactEdit).toBeDefined();
  });

  it('should have a firstname', function() {
    expect(scope.contactEdit.firstname).toBe("Cameron");
  });

  it('should have a lastname', function() {
    expect(scope.contactEdit.lastname).toBe("Dubas");
  });

  it('should have a phone', function() {
    expect(scope.contactEdit.phone).toBe("6047280012");
  });

  it('should have a address', function() {
    expect(scope.contactEdit.address).toBe("289 Abbott St., Vancouver, BC, V3M 2L7");
  });
  
  it('should have a email', function() {
    expect(scope.contactEdit.email).toBe("cameron@changeheroes.com");
  });
});