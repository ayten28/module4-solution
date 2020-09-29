(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'scr/menulist/templates/home.template.html'
  })
  .state('categories', {
              url: '/categories',
              templateUrl: 'scr/menulist/templates/categories.template.html',
              controller: 'categoriesController as categoriesCtrl',
              resolve: {
                  categories: ['MenuDataService', function(MenuDataService) {
                      return MenuDataService.getAllCategories();
                  }]
              }
          })
          .state('items', {
              url: '/categories/{categoryShortName}',
              templateUrl: 'scr/menulist/templates/items.template.html',
              controller: 'itemsController as itemsCtrl',
              params: {
                  categoryShortName: null,
                  categoryName: null
              },
              resolve: {
                  items: ['$stateParams', 'MenuDataService', function($stateParams, MenuDataService) {
                      return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
                  }]
              }
          });
}



})();
