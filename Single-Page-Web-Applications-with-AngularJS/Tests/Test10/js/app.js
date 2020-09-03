(function () {
    'use strict';

    angular.module('HttpRequestApp', [])
        .controller('HttpController', HttpController)
        .service('HttpService', HttpService)
        .constant('ApiBasePath',"https://davids-restaurant.herokuapp.com");

    HttpController.$inject = ['HttpService'];

    function HttpController(HttpService) {
        var ctrl = this;

        var promise = HttpService.getMenuCategories();
        promise
            .then(function (response) {
                ctrl.categories = response.data;
            })
            .catch(function (error) {
                console.log("There was an error fetching the data!");
            });

        ctrl.getMenuByCategory = function (short_name) {
            var promise2 = HttpService.getMenuByCategory(short_name);
            promise2
                .then(function (response) {
                    console.log(response.data);
                    ctrl.menuitems = response.data;
                })
                .catch(function (error) {
                    console.log("There was an error!")
                })
        };
    }

    HttpService.$inject = ['$http','ApiBasePath']

    function HttpService($http,ApiBasePath) {
        var service = this;

        service.getMenuCategories = function () {
            var response = $http({
                method: "GET",
                url: (ApiBasePath+'/categories.json')
            });
            return response;
        }

        service.getMenuByCategory = function (short_name) {
            var response = $http({
                method: "GET",
                url: (ApiBasePath+"/menu_items.json"),
                params: {category: short_name}
            })
            return response;
        }
    }
})();
