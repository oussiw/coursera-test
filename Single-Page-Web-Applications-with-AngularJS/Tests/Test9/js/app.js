(function () {
    'use strict';
    angular.module('ShoppingListCheckOff', [])
        .controller('ShoppingListController', ShoppingListController)
        .service('ShoppingListService', ShoppingListService)
        .service('WeightLossFilterService', WeightLossFilterService);


    ShoppingListController.$inject = ['ShoppingListService'];

    function ShoppingListController(ShoppingListService) {
        var ctrl = this;

        ctrl.itemName = "";
        ctrl.itemQuantity = 0;

        ctrl.listItems = ShoppingListService.getItems();

        ctrl.addItem = function () {
            ShoppingListService.addItem(ctrl.itemName, ctrl.itemQuantity);
            console.log("add")
        }

        ctrl.deleteItem = function (index) {
            ShoppingListService.removeItem(index);
        }
    }

    ShoppingListService.$inject = ['$q', 'WeightLossFilterService'];

    function ShoppingListService($q, WeightLossFilterService) {
        var service = this;

        var items = [];

        // First version of async call
        // service.addItem = function (itemName, itemQuantity) {
        //     var promise = WeightLossFilterService.checkName(itemName);
        //
        //     promise.then(function (response) {
        //         var nextPromise = WeightLossFilterService.checkQuantity(itemQuantity);
        //
        //         nextPromise.then(function (result) {
        //             var item = {name: itemName, quantity: itemQuantity}
        //             items.push(item);
        //         }, function (errorResponse) {
        //             console.log(errorResponse.message);
        //         });
        //     }, function (errorResponse) {
        //         console.log(errorResponse.message);
        //     })
        // };

        // Second version
        // service.addItem = function (itemName, itemQuantity) {
        //     var promise = WeightLossFilterService.checkName(itemName);
        //     promise
        //         .then(function (response) {
        //             return WeightLossFilterService.checkQuantity(itemQuantity);
        //         })
        //         .then(function (response) {
        //             var item = {name: itemName, quantity: itemQuantity}
        //             items.push(item);
        //         })
        //         .catch(function (errorResponse) {
        //             console.log(errorResponse.message);
        //         })
        // };

        //Third version
        service.addItem = function (itemName, itemQuantity) {
            var namePromise = WeightLossFilterService.checkName(itemName);
            var quantityPromise = WeightLossFilterService.checkQuantity(itemQuantity);

            // Verify the promises simultaneously
            // if the faster condition fails( in this case quantityPromise it will automatically throw the error.
            // The standby time will equal the maximum value between the promises instead of the sum
            $q.all([namePromise, quantityPromise])
                .then(function (response) {
                    var item = {name: itemName, quantity: itemQuantity}
                    items.push(item);
                })
                .catch(function (errorResponse) {
                    console.log(errorResponse.message);
                });
        };

        service.getItems = function () {
            return items;
        }

        service.removeItem = function (index) {
            items.splice(index, 1);
        }
    }

    WeightLossFilterService.$inject = ['$q', '$timeout']

    function WeightLossFilterService($q, $timeout) {
        var service = this;

        service.checkName = function (name) {
            var deferred = $q.defer();
            var result = {message: ""};
            $timeout(function () {
                if (name.toLowerCase().indexOf("cookies") === -1) {
                    deferred.resolve(result);
                } else {
                    result.message = "Stay away from cookies";
                    deferred.reject(result);
                }
            }, 3000);
            return deferred.promise;
        };

        service.checkQuantity = function (quantity) {

            var deferred = $q.defer();
            var result = {message: ""};
            $timeout(function () {
                if (quantity < 6) {
                    deferred.resolve(result);
                } else {
                    result.message = "Too much!";
                    deferred.reject(result);
                }
            }, 1000);
            return deferred.promise;
        }
    }

})();

