(function () {
    'use strict';
    angular.module('myFirstApp',[])
        .controller("AddController",theAddController)
        .provider("ItemService",ServiceProvider)
        .config(Config);

    theAddController.$inject = ['ItemService'];
    function theAddController(ItemService) {
        var list1 = this;

        list1.items = ItemService.getCart();

        list1.itemName = "";
        list1.itemQuantity = "";

        list1.addItem = function () {
            try{
                ItemService.addItem(list1.itemName,list1.itemQuantity);
            }catch (e) {
                list1.errorMessage = e.message;
            }
        };

        list1.removeItem = function (index) {
            ItemService.remove(index);
        };

    }
    Config.$inject = ['ItemServiceProvider']
    function Config(ItemServiceProvider) {
        ItemServiceProvider.defaults.maxItems = 3;
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

    function ServiceProvider() {
        var provider = this;

        provider.defaults = {
            maxItems : 10
        }

        provider.$get = function () {
            var itemService = new ItemService(provider.defaults.maxItems);
            return itemService;
        }
    }

})();
