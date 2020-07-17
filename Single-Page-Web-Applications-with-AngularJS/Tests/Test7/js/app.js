(function () {
    'use strict';
    angular.module('myFirstApp',[])
        .controller("AddController",theAddController)
        .controller("ShowController",theShowController)
        .factory('ServiceFactory',ServiceFactory);

    theAddController.$inject = ['ServiceFactory'];
    function theAddController(ServiceFactory) {
        var list1 = this;
        var shoppingService = ServiceFactory();
        list1.items = shoppingService.getCart();

        list1.itemName = "";
        list1.itemQuantity = "";

        list1.addItem = function () {
            shoppingService.addItem(list1.itemName,list1.itemQuantity);
        };

        list1.removeItem = function (index) {
            shoppingService.remove(index);
        };

    }

    theShowController.$inject = ['ServiceFactory'];
    function theShowController(ServiceFactory) {
        var list2 = this;

        var shoppingService = ServiceFactory(3);

        list2.items = shoppingService.getCart();

        list2.itemName = "";
        list2.itemQuantity = "";

        list2.addItem = function () {
            try{
                shoppingService.addItem(list2.itemName,list2.itemQuantity);
            }catch (e) {
                list2.errorMessage = e.message;
            }

        };

        list2.removeItem = function (index) {
            shoppingService.remove(index);
            list2.errorMessage = "";
        };
    }

    function ItemService(maxItems) {
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
            if( (maxItems === undefined) || (maxItems !== undefined && shoppingCart.length < maxItems)){
                if(itemQuantity >=1 && itemName !== ""){
                    var item = {
                        name: itemName,
                        quantity:itemQuantity
                    }
                    shoppingCart.push(item);
                }
                else alert("Error while parsing item properties")
            }
            else {
                throw new Error("Max items ( "+maxItems+" ) reached.");
            }
        }

        service.getCart = function () {
            return shoppingCart;
        };

        service.remove = function (index) {
            shoppingCart.splice(index,1);
        }
    }

    function ServiceFactory() {
        var factory = function (maxItems) {
            return new ItemService(maxItems);
        };

        return factory;
    }

})();
