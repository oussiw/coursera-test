(function () {
    'use strict';

    angular.module('myFirstApp',[])
        .controller('myFirstController',function ($scope) {
            $scope.name = '';
            $scope.numericValue = 0;
            $scope.displayValue = function (){
                $scope.numericValue = calculateCode($scope.name);
            }
            function calculateCode(string) {
                var totalCode = 0;
                for (var i=0;i<string.length;i++){
                    totalCode += string.charCodeAt(i);
                }
                return totalCode;
            }
        })


})();