angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('page4', {
    url: '/page4',
    templateUrl: 'templates/page4.html',
    controller: 'page4Ctrl'
  })

  .state('page', {
    url: '/page7',
    templateUrl: 'templates/page.html',
    controller: 'pageCtrl'
  })

  .state('page2', {
    url: '/page8',
    templateUrl: 'templates/page2.html',
    controller: 'page2Ctrl'
  })

  .state('page3', {
    url: '/page9',
    templateUrl: 'templates/page3.html',
    controller: 'page3Ctrl'
  })

  .state('page4', {
    url: '/page10',
    templateUrl: 'templates/page4.html',
    controller: 'page4Ctrl'
  })

  .state('page5', {
    url: '/page11',
    templateUrl: 'templates/page5.html',
    controller: 'page5Ctrl'
  })

  .state('page6', {
    url: '/page12',
    templateUrl: 'templates/page6.html',
    controller: 'page6Ctrl'
  })

  .state('page7', {
    url: '/page15',
    templateUrl: 'templates/page7.html',
    controller: 'page7Ctrl'
  })

  .state('page8', {
    url: '/page16',
    templateUrl: 'templates/page8.html',
    controller: 'page8Ctrl'
  })

  .state('page9', {
    url: '/page17',
    templateUrl: 'templates/page9.html',
    controller: 'page9Ctrl'
  })

  .state('page10', {
    url: '/page18',
    templateUrl: 'templates/page10.html',
    controller: 'page10Ctrl'
  })

  .state('page11', {
    url: '/page19',
    templateUrl: 'templates/page11.html',
    controller: 'page11Ctrl'
  })

  .state('page12', {
    url: '/page20',
    templateUrl: 'templates/page12.html',
    controller: 'page12Ctrl'
  })

  .state('page13', {
    url: '/page21',
    templateUrl: 'templates/page13.html',
    controller: 'page13Ctrl'
  })

  .state('page14', {
    url: '/page22',
    templateUrl: 'templates/page14.html',
    controller: 'page14Ctrl'
  })

  .state('page15', {
    url: '/page13',
    templateUrl: 'templates/page15.html',
    controller: 'page15Ctrl'
  })

  .state('page16', {
    url: '/page14',
    templateUrl: 'templates/page16.html',
    controller: 'page16Ctrl'
  })

$urlRouterProvider.otherwise('/page4')


});