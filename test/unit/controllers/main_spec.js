describe('MainCtrl', function() {

  var ctrl, scope, rootScope, location;

  beforeEach(angular.mock.module('app'));
  beforeEach(angular.mock.inject(function($location, $rootScope, $controller) {
    location = $location;
    rootScope = $rootScope;
    scope = $rootScope.$new();
    ctrl = $controller('MainCtrl as main', {$scope: scope});
  }));

  it('should exist', function() {
    expect(scope.main).toBeDefined();
  });

  it('should not be in edit mode', function() {
    expect(scope.main.inEditMode).toBe(false);
  });
});