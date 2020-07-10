(function () {
    'use strict';

    angular.module('myFirstApp',[])
        .controller('myFirstController',DIfunction);

    function DIfunction($scope, $filter) {
        $scope.name = 'Oussama';
        // $scope.numericValue = 0;
        // $scope.displayValue = function (){
        //     $scope.numericValue = calculateCode($scope.name);
        // }
        // function calculateCode(string) {
        //     var totalCode = 0;
        //     for (var i=0;i<string.length;i++){
        //         totalCode += string.charCodeAt(i);
        //     }
        //     return totalCode;
        // }

        $scope.upper = function () {
            var upCase = $filter('uppercase');
            $scope.name = upCase($scope.name);
        }
    }


})();