angular.module('app', ['ui.router']);

angular.module('app').config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  // Create state that contains a parent view that holds two views.
  // Pass the sharedData between each child view
  $stateProvider
    .state('index', {
        url: '/',
        resolve: { 
          sharedData: function() { 
            return { contact: null }; 
          } 
        },
        views: {
          '' : { 
            templateUrl: '/app/partials/address_book.html' 
          },

          'contactListView@index': { 
            templateUrl: '/app/partials/contact_list.html',
            controller: 'ContactListCtrl',
            controllerAs: 'contactList'
          },

          'mainView@index': {
            templateUrl: '/app/partials/main_view.html',
            controller: 'MainCtrl',
            controllerAs: 'main'
          }
        }
    })

    // Create two additional states to change the partial depending on the url
    .state('index.contact', {
      url: 'contact',
      templateUrl: '/app/partials/read_contact.html',
      controller: 'ContactReadCtrl',
      controllerAs: 'contactRead'
    })

    .state('index.edit', {
      url: 'edit',
      templateUrl: '/app/partials/edit_contact.html',
      controller: 'ContactEditCtrl',
      controllerAs: 'contactEdit'
    });

});