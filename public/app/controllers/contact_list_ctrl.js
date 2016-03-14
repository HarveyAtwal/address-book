angular.module("app").controller('ContactListCtrl', function($scope, $location, sharedData, contacts) {
  var self = this;
  
  // Returns the json result from contacts.json
  contacts.success(function(data) {
    self.contacts = data.contacts;

    // Make the first contact 'active'
    if(self.contacts.length !== 0) {
      $scope.changeContact(self.contacts[0]);
    }
  });

  $scope.changeContact = function(contact) {
    sharedData.contact = contact;
    self.selectedContact = contact;
    $location.url('/contact');
  };
});