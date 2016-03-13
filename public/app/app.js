angular.module('app', ['ui.router']);

angular.module('app').config(function($stateProvider, $urlRouterProvider) {
  
  $urlRouterProvider.otherwise('/');
  
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
            templateUrl: '/app/partials/home.html' 
          },

          'contactList@index': { 
            templateUrl: '/app/partials/contact_list.html',
            controller: 'ContactListCtrl',
            controllerAs: 'contactList'
          },

          'mainView@index': {
            templateUrl: '/app/partials/read_contact.html',
            controller: 'ContactReadCtrl',
            controllerAs: 'contactRead'
          }
        }
    });
});