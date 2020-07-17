(function () {
    'use strict';
    angular.module('myFirstApp',[])
        .controller("AddController",theAddController)
        .controller("ShowController",theShowController)
        .service("myService",myService);

    theAddController.$inject = ['myService'];
    function theAddController(myService) {
        var itemAdder = this;
        itemAdder.itemName = "";
        itemAdder.itemQuantity = "";
        itemAdder.addItem = function () {
            myService.addItem(itemAdder.itemName,itemAdder.itemQuantity);
        }
    }

    theShowController.$inject = ['myService'];
    function theShowController(myService) {
        var itemShower = this;
        itemShower.cart = myService.getCart();
        itemShower.removeItem = function (index) {
            console.log("remove");
            myService.remove(index);
        }
    }

    function myService() {
        var service = this;

        var shoppingCart = [
            {
                name:"laptop",
                quantity:1
            },
            {
                name: "speaker",
                quantity: 4
            }
        ];

        service.addItem = function (itemName,itemQuantity) {
            if(itemQuantity >=1 && itemName !== ""){
                var item = {
                    name: itemName,
                    quantity:itemQuantity
                }
                shoppingCart.push(item);
            }
            else alert("Error while parsing item properties")
        }

        service.getCart = function () {
            return shoppingCart;
        };

        service.remove = function (index) {
            shoppingCart.splice(index,1);
        }
    }

})();
