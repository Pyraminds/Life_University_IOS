// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
      $stateProvider

        .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
      })
      .state('app.home', {
        url: '/home',
        views: {
          'menuContent': {
            templateUrl: 'templates/home.html'
          }
        }
      })

      .state('app.about', {
        url: '/about',
        views: {
          'menuContent': {
            templateUrl: 'templates/about.html'
          }
        }
      })
      .state('app.visions_and_missions', {
        url: '/visions_and_missions',
        views: {
          'menuContent': {
            templateUrl: 'templates/visions_and_missions.html'
          }
        }
      })
      .state('app.principles_and_ethics', {
        url: '/principles_and_ethics',
        views: {
          'menuContent': {
            templateUrl: 'templates/principles_and_ethics.html'
          }
        }
      })

      .state('app.school_of_wisdom', {
          url: '/school_of_wisdom',
          views: {
            'menuContent': {
              templateUrl: 'templates/school_of_wisdom.html'
            }
          }
        })
        .state('app.our_work', {
          url: '/our_work',
          views: {
            'menuContent': {
              templateUrl: 'templates/our_work.html'
            }
          }
        })
        .state('app.workshops', {
          url: '/workshops',
          views: {
            'menuContent': {
              templateUrl: 'templates/workshops.html'
            }
          }
        })
        .state('app.training_programs', {
          url: '/training_programs',
          views: {
            'menuContent': {
              templateUrl: 'templates/training_programs.html'
            }
          }
        })
        .state('app.schedule', {
          url: '/schedule',
          views: {
            'menuContent': {
              templateUrl: 'templates/schedule.html'
            }
          }
        })
        .state('app.meditation', {
          url: '/meditation',
          views: {
            'menuContent': {
              templateUrl: 'templates/meditation.html'
            }
          }
        })
        .state('app.live', {
          url: '/live',
          views: {
            'menuContent': {
              templateUrl: 'templates/live.html'
            }
          }
        })
        .state('app.freedownloads', {
          url: '/freedownloads',
          views: {
            'menuContent': {
              templateUrl: 'templates/freedownloads.html'
            }
          }
        })
        .state('app.newsletter', {
          url: '/newsletter',
          views: {
            'menuContent': {
              templateUrl: 'templates/newsletter.html'
            }
          }
        })
        .state('app.contact', {
          url: '/contact',
          views: {
            'menuContent': {
              templateUrl: 'templates/contact.html'
            }
          }
        })
        .state('app.playlists', {
          url: '/playlists',
          views: {
            'menuContent': {
              templateUrl: 'templates/playlists.html',
              controller: 'PlaylistsCtrl'
            }
          }
        })

      .state('app.single', {
        url: '/playlists/:playlistId',
        views: {
          'menuContent': {
            templateUrl: 'templates/playlist.html',
            controller: 'PlaylistCtrl'
          }
        }
      });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});
