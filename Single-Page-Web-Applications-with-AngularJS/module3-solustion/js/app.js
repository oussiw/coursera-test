// (function () {
//     'use strict';
//     angular.module('ShoppingListCheckOff', [])
//         .controller('ToBuyController', ToBuyController)
//         .controller('AlreadyBoughtController', AlreadyBoughtController)
//         .service('ShoppingListCheckOffService', ShoppingListCheckOffService);
//
//
//     ToBuyController.$inject = ['ShoppingListCheckOffService'];
//     function ToBuyController(ShoppingListCheckOffService) {
//         var ctrl = this;
//
//         ctrl.listItems = ShoppingListCheckOffService.getToBuyList();
//
//         ctrl.markAsBought = function (index) {
//             ShoppingListCheckOffService.addBoughtItem(index);
//         }
//     }
//
//     AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
//     function AlreadyBoughtController(ShoppingListCheckOffService) {
//         var ctrl = this;
//
//         ctrl.listItems = ShoppingListCheckOffService.getBoughtList();
//     }
//
//
//     function ShoppingListCheckOffService() {
//         var service = this;
//
//         var toBuyCart = [
//             {name: "cookies", quantity: 10},
//             {name: "sugar pack", quantity: 20},
//             {name: "beef", quantity: 5},
//             {name: "sushi", quantity: 2},
//             {name: "tomato", quantity: 10}
//         ];
//
//         var boughtCart = [];
//
//         service.addBoughtItem = function (index) {
//             var boughtItem = toBuyCart[index];
//             toBuyCart.splice(index, 1);
//             boughtCart.push(boughtItem);
//         };
//
//         service.getToBuyList = function () {
//             return toBuyCart;
//         }
//
//         service.getBoughtList = function () {
//             return boughtCart;
//         }
//     }
//
// })();

!function(){"use strict";function t(t){this.listItems=t.getToBuyList(),this.markAsBought=function(i){t.addBoughtItem(i)}}function i(t){this.listItems=t.getBoughtList()}angular.module("ShoppingListCheckOff",[]).controller("ToBuyController",t).controller("AlreadyBoughtController",i).service("ShoppingListCheckOffService",function(){var t=[{name:"cookies",quantity:10},{name:"sugar pack",quantity:20},{name:"beef",quantity:5},{name:"sushi",quantity:2},{name:"tomato",quantity:10}],i=[];this.addBoughtItem=function(e){var n=t[e];t.splice(e,1),i.push(n)},this.getToBuyList=function(){return t},this.getBoughtList=function(){return i}}),t.$inject=["ShoppingListCheckOffService"],i.$inject=["ShoppingListCheckOffService"]}();
