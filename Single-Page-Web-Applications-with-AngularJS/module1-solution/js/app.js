(function () {
    'use strict';
    angular.module('LunchCheck',[])
        .controller('LunchCheckController',Myfunction);
    Myfunction.$inject = ["$scope"];
    function Myfunction($scope) {
        $scope.listItems = "";
        $scope.output = "";
        $scope.checkItems = function () {
            if($scope.listItems===("")){
                showMessage("Please enter data first");
            }
            else{
                var list = $scope.listItems.split(",");
                if(list.length <= 3){
                    showMessage("Enjoy!");
                }
                else{
                    showMessage("Too much!")
                }
            }
        }
        function showMessage(string) {
            $scope.output = string;
        }
    }
})();