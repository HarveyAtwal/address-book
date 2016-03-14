angular.module("app").controller('ContactEditCtrl', function($scope, $location, sharedData) {
  var self = this;

  // Make a copy of the shared contact
  self.sharedData = sharedData;
  self.firstname = sharedData.contact.firstname;
  self.lastname = sharedData.contact.lastname;
  self.email = sharedData.contact.email;
  self.phone = sharedData.contact.phone;
  self.address = sharedData.contact.address;

  $scope.cancel = function() {
    $location.url('/contact');
  };

  $scope.saveContact = function(isValid) {
    if (isValid) {
      // Save the copy to the actual shared contact
      sharedData.contact.firstname = self.firstname;
      sharedData.contact.lastname = self.lastname;
      sharedData.contact.email = self.email;
      sharedData.contact.phone = self.phone;
      sharedData.contact.address = self.address;
      $location.url('/contact');
    }
  };
});