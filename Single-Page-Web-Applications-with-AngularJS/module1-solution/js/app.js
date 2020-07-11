(function () {
    'use strict';
    angular.module('myFirstApp',[])
        .controller('myFirstController',DIfunction);
    DIfunction.$inject = ["$scope", "$filter"];
    function DIfunction($scope, $filter) {
        $scope.name = 'Oussama';
        $scope.upper = function () {
            var upCase = $filter('uppercase');
            $scope.name = upCase($scope.name);
        }
    }
})();