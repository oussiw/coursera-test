(function () {
    'use strict';
    angular.module('myFirstApp',[])
        .controller('myFirstController',DIfunction);

    DIfunction.$inject = ["$scope"];
    function DIfunction($scope) {
        $scope.items = ["item1","item2","item3"];
        $scope.users = [
            {
                firstName:"Oussama",
                lastName:"Siwane",
                age:22,
                "city of location":"Casa"
            },
            {
                firstName: "Ali",
                lastName: "Alaoui",
                age: 22,
                "city of location":"Casa"
            },
            {
                firstName: "Zak",
                lastName: "king",
                age: 54,
                "city of location":"Rabat"
            }
        ];
        $scope.filteredUsers = $scope.users.filter(filterr);

        $scope.filteredItems = $scope.items;

        $scope.displayM = function () {
            console.log('hola')
        }
    };

    function filterrr(value) {
        return value.indexOf("item1") !== -1;
    }
    function filterr(value) {
        return value["city of location"].indexOf("Rabat") === -1;
    }
})();
