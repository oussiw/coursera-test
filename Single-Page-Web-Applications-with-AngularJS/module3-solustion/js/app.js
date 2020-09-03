(function () {
    "use strict";

    angular.module('module3', [])
        .controller('MyController', MyController)
        .service('MyService',MyService)
        .service('HttpService', HttpService)
        .constant('ApiBasePath',"https://davids-restaurant.herokuapp.com");

    MyController.$inject = ['MyService','HttpService']
    function MyController(MyService,HttpService){
        var ctrl = this;

        ctrl.search = function (){
            var promise = HttpService.getMenuItems();
            promise
                .then(function (response) {
                    ctrl.menu_items = response.data;
                })
                .catch(function (error) {
                    console.log("There was an error fetching the data!");
                });
            ctrl.selected_items = MyService.search(ctrl.searchInput,ctrl.menu_items.menu_items);
        }

        ctrl.removeItem = function (index){
            ctrl.selected_items.splice(index,1);
        }
    }

    function MyService(){
        var service = this;
        service.search = function (search_entry , array){
            var selectedItems = [];
            for(var i=0;i<array.length;i++){
                if(array[i].description.indexOf(search_entry)<0){
                    console.log("No item found!!");
                }
                else{
                    console.log("Found")
                    selectedItems.push(array[i]);
                }
            }
            return selectedItems;
        }
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

        service.getMenuItems = function () {
            var response = $http({
                method: "GET",
                url: (ApiBasePath+"/menu_items.json"),
            })
            console.log("Foundccccc")
            return response;
        }
    }
})();
