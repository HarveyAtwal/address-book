angular.module("app").controller('ContactListCtrl', function(contacts) {
  var self = this;
  
  contacts.success(function(data) {
    self.contacts = data.contacts;
  }); 
});