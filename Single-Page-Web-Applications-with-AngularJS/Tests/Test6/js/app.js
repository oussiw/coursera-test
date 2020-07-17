(function () {
    'use strict';
    angular.module('myFirstApp',[])
        .controller("AddController",theAddController)
        .controller("ShowController",theShowController);

    theAddController.$inject = ["$scope"]
    function theAddController($scope) {
        $scope.name = "";
        $scope.quantity ;
        $scope.addItem = function () {
            if($scope.quantity >=1 && !$scope.quantity && $scope.name !== "" && $scope.name !== null){
                shoppingCart.concat({
                    name: $scope.name,
                    quantity: $scope.quantity
                })
            }
            else alert("Impossible")
        }
    }
    var shoppingCart = [
        {
            name:"laptop",
            quantity:1
        },
        {
            name: "speaker",
            quantity: 4
        }
    ]

    theShowController.$inject = ["$scope"]
    function theShowController($scope) {
        $scope.cart = shoppingCart;
    }


})();
