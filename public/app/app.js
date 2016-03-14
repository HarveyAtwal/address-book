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

    .state('index.contact', {
      url: 'contact',
      templateUrl: '/app/partials/read_contact.html',
      controller: 'ContactReadCtrl',
      controllerAs: 'contactRead'
    })

    .state('index.edit', {
      url: 'edit',
      templateUrl: '/app/partials/edit_contact.html'
    });

});