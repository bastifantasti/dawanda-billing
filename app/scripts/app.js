'use strict';

/**
 * @ngdoc overview
 * @name dawandaBillingApp
 * @description
 * # dawandaBillingApp
 *
 * Main module of the application.
 */


    //plugin function, place inside DOM ready function


angular
    .module('dawandaBillingApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl'
            })
            .when('/contact', {
                templateUrl: 'views/contact.html',
                controller: 'AboutCtrl'
            })
            .when('/billing', {
                templateUrl: 'views/billing.html',
                controller: 'BillingCtrl'
            })
            .when('/order', {
                templateUrl: 'views/order.html',
                controller: 'OrderCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
