(function () {
    "use strict";

    angular.module('module3', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService', MenuSearchService)
        .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
        .directive('foundItems', FoundItems);

    NarrowItDownController.$inject = ['MenuSearchService']

    function NarrowItDownController(MenuSearchService) {
        var ctrl = this;
        ctrl.error_message = "";
        ctrl.searchInput = "";
        ctrl.search = function () {
            ctrl.error_message = "";
            if(ctrl.searchInput.length > 0){
                var promise = MenuSearchService.getMatchedMenuItems(ctrl.searchInput);
                promise
                    .then(function (response) {
                        ctrl.found = response;
                        console.log(ctrl.found.length);
                        if(ctrl.found.length<=0){
                            ctrl.error_message = "Not found";
                        }
                    })
                    .catch(function (error) {
                        console.log(error.message);
                    });
            }
            else{
                ctrl.found = [];
                ctrl.error_message = "Incorrect input";
            }
        }

        ctrl.removeItem = function (index) {
            ctrl.found.splice(index, 1);
        }
    }

    function FoundItems() {
        var ddo = {
            templateUrl: 'itemsloaderindicator.template.html'
        };

        return ddo;
    }

    MenuSearchService.$inject = ['$http', 'ApiBasePath']

    function MenuSearchService($http, ApiBasePath) {
        var service = this;
        service.getMatchedMenuItems = function (searchTerm) {
            return $http({
                method: "GET",
                url: (ApiBasePath + "/menu_items.json"),
            }).then(
                function (response) {
                    var fetchedItems = response.data.menu_items;
                    var foundItems = [];

                    for (var i = 0; i < fetchedItems.length; i++) {
                        if (fetchedItems[i].description.toLowerCase().indexOf(searchTerm.toLowerCase()) < 0) {
                        } else {
                            foundItems.push(fetchedItems[i]);
                        }
                    }
                    return foundItems;
                }
            ).catch(function (error) {
                console.log(error.message);
            });
        }
    }

})();
