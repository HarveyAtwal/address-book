angular.module("app").controller('MainCtrl', function($scope, $location) {
  var self = this;
  self.inEditMode = false;

  // I did not want other controllers/views to be responsible
  // for updating the view. My solution was to watch the url
  // and see if the user clicked to leave the edit view
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