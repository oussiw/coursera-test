(function () {
    'use strict';
    angular.module('myFirstApp',[])
        .controller('ParentController1',ParentController1)
        .controller('ChildController1',ChildController1)
        .controller('ParentController2',ParentController2)
        .controller('ChildController2',ChildController2);

    ParentController1.$inject = ["$scope"];
    function ParentController1($scope) {
        $scope.parentValue = 1;
        $scope.pc = this;
        $scope.pc.parentValue = 1;
    }
    ChildController1.$inject = ["$scope"];
    function ChildController1($scope) {
        // console.log("$scope.parentValue: ", $scope.parentValue);
        // console.log("CHILD: $scope: ", $scope);
        // console.log("None")
    }
//Don't need to inject any scope
    function ParentController2() {
        this.value = 1;
    }
    ChildController2.$inject = ["$scope"];
    function ChildController2($scope) {
        this.value = 5;
        console.log("ChildScope $scope: ",$scope);
    }
    //
    // var parent = {
    //     value:"parentValue",
    //     obj:{
    //         objValue:"parentObjValue"
    //     },
    //     walk:function () {
    //         console.log("parent: walking!");
    //     }
    // }
// How to inherit from an object
//     var child = Object.create(parent);
//     var outputObjects = function () {
//         console.log("Parent value: ",parent.value);
//         console.log("Parent obj value: ",parent.obj.objValue);
//         console.log("Child value: "+child.value);
//         console.log("Child obj value: "+child.obj.objValue);
//         console.log("parent: ",parent);
//         console.log("child", child);
//     }
//
//     outputObjects();
//
//     console.log("2nd round: ===================");
//     child.value = "child";
//     child.obj.objValue = "childObjValue";
//     outputObjects();

})();
