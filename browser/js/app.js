window.app = angular.module('FullstackGeneratedApp', ['ui.router',
  'ui.bootstrap', 'ngMaterial'
]);

app.config(function($urlRouterProvider, $locationProvider) {
  // This turns off hashbang urls (/#about) and changes it to something normal (/about)
  $locationProvider.html5Mode(true);
  // If we go to a URL that ui-router doesn't have registered, go to the "/" url.
  $urlRouterProvider.otherwise('/');
});

// This app.run is for controlling access to specific states.
app.run(function($rootScope, $state) {
  $state.go('home');
});
