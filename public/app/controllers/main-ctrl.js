angular.module("app").controller('MainCtrl', function($scope, $location) {
  var self = this;
  self.inEditMode = false;

  $scope.$watch(function() {
    return $location.path();
  }, function(value) {
    var url = value;
    if(url !== '/edit') {
      self.inEditMode = false;
    } else {
      self.inEditMode = true;
    }
  });
});