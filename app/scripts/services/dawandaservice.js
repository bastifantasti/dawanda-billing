'use strict';

/**
 * @ngdoc service
 * @name dawandaBillingApp.billingService
 * @description
 * # billingService
 * Service in the dawandaBillingApp.
 */
angular.module('dawandaBillingApp')
    .service('Dawandaservice', function Dawandaservice() {
        var api = new DaWanda.API("380d7924396f5596116f3d8815c97dfd8c975582", "de");

        function init() {
            username = $("#username")[0].value;
            api.getShopDetails(username, {
                onSuccess: renderCategories
            });
        };
        var getShopDetails = function (username) {
            api.getShopDetails(username, {
                onSuccess: renderCategories
            });
        };

        return {
            getShopDetails: getShopDetails
        };
        // AngularJS will instantiate a singleton by calling "new" on this function
    });
