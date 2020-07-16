(function () {
    'use strict';
    angular.module('myFirstApp',[])
        .controller('myFirstController',DIfunction);

    DIfunction.$inject = ["$scope"];
    function DIfunction($scope) {

    }

    var parent = {
        value:"parentValue",
        obj:{
            objValue:"parentObjValue"
        },
        walk:function () {
            console.log("parent: walking!");
        }
    }
    parent.walk();
})();
