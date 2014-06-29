'use strict';

/**
 * @ngdoc service
 * @name dawandaBillingApp.billingService
 * @description
 * # billingService
 * Service in the dawandaBillingApp.
 */
angular.module('dawandaBillingApp')
    .service('Billingservice', function Billingservice() {
        var currItem;

        var getCurrItem = function () {
            return currItem;
        };
        var setCurrItem = function (item) {
            currItem = item;
        };
        return {
            getCurrItem: getCurrItem,
            setCurrItem: setCurrItem
        };

        // AngularJS will instantiate a singleton by calling "new" on this function
    });
