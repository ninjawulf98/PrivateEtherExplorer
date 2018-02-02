// public/core.js
var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
  //     $locationProvider.html5Mode({
  //        enabled: true,
  //        requireBase: false
  // });

  $locationProvider.hashPrefix('');

  $routeProvider.
    when('/dashboard', {
      templateUrl: 'dashboard.html', controller: 'dashboardController'
    }).
    when('/accounts', {
      templateUrl: 'home.html', controller: 'homeController'
    }).
    when('/blockList', {
      templateUrl: 'blockList.html', controller: 'blockListController'
    }).
    when('/block/:addr', {
      templateUrl: 'block.html', controller: 'blockController'
    }).
    when('/transactionsList/:id', {
      templateUrl: 'transactionsList.html', controller: 'transactionsListController'
    }).

    otherwise({
      redirectTo: '/dashboard'
    });

}]);
