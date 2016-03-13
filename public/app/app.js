angular.module('app', ['ui.router']);

angular.module('app').config(function($stateProvider, $urlRouterProvider) {
  
  $urlRouterProvider.otherwise('/');
  
  $stateProvider
    .state('index', {
        url: '/',
        views: {
          '' : { 
            templateUrl: '/app/partials/home.html' 
          },

          'contactList@index': { 
            templateUrl: '/app/partials/contact_list.html'
          },

          'mainView@index': {
            templateUrl: '/app/partials/read_contact.html'
          }
        }
    });
});