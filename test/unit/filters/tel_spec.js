describe('Tel Filter', function() {

  var filter;

  beforeEach(angular.mock.module('app'));
  beforeEach(angular.mock.inject(function($filter) {
    filter = $filter('tel');
  }));

  it('should format a phone number', function() {
    var result = filter('6047280012');
    expect(result).toBe('(604) 728-0012');
  });
});