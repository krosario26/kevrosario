angular.module('kevRosario', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider, $locationProvider) {

    //Any unmatched url's redirect to '/'
    $urlRouterProvider.otherwise('/');

    //Here are all the states
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'templates/home.html'
      })
      .state('portfolio', {
        url: '/portfolio',
        templateUrl: 'templates/portfolio.html'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'templates/about.html'
      })
      .state('contact', {
        url: '/contact',
        templateUrl: 'templates/contact.html'
      });

      //using the HTML5 History API to get rid of the #
      $locationProvider.html5Mode(true);

  });
