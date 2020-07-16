// First method of declaration
// (function () {
//     'use strict';
//
//     angular.module('myFirstApp',[])
//         .controller('myFirstController',DIfunction);
//     function DIfunction($scope, $filter) {
//         $scope.name = 'Oussama';
//         $scope.upper = function () {
//             var upCase = $filter('uppercase');
//             $scope.name = upCase($scope.name);
//         }
//     }
// })();

// Second method of declaration
// (function () {
//     'use strict';
//     angular.module('myFirstApp',[])
//         .controller('myFirstController',["$scope", "$filter",DIfunction]);
//     function DIfunction($scope, $filter) {
//         $scope.name = 'Oussama';
//         $scope.upper = function () {
//             var upCase = $filter('uppercase');
//             $scope.name = upCase($scope.name);
//         }
//     }
// })();

// Third method of declaration
(function () {
    'use strict';
    angular.module('MsgApp',[])
        .controller('MsgAppController',DIfunction)
        .controller('MysecondController',SEfunction)
        .filter('hiMessage',hiFilterFactory)
        .filter("concat",concatFilterFactory);

    DIfunction.$inject = ["$scope","$filter"];
    function DIfunction($scope,$filter) {
        $scope.name = 'Yaakov';
        $scope.state = "hungry";
        $scope.button = "Feed me ...";
        $scope.cost = .45;
        // $scope.sayHello = function(){
        //     var msg = "Nice to meet you friend!";
        //     return $filter("uppercase")(msg);
        // };
        $scope.sayHello = function(){
            var action = $filter("uppercase");
            var msg = "Nice to meet you friend!";
            return action(msg);
        };
        $scope.changeState = function () {
            $scope.state = "fed";
            $scope.button = "Fed";
        }
    };
// Here I tested the possibility of adding multiple controllers and creating custom filters
    SEfunction.$inject = ["$scope","hiMessageFilter"];
    function SEfunction($scope,hiMessageFilter) {
        $scope.message = hiMessageFilter("Hello motherfucker from earth;");
    };

    function hiFilterFactory() {
        return function (input) {
            console.log("first filter")
            return input.replace("Hello","Hi");
        }
    };

    function concatFilterFactory() {
        return function (input,arg1) {
            console.log("Second filter")
            return input.concat(arg1);
        }
    };


})();
