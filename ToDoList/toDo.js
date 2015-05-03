/**
 * Created by Muhammad on 5/2/2015.
 */

var app = angular.module("myFirebaseApp",["ngMaterial" , "firebase"]);

app.controller("myForm", function($scope, $firebaseArray)
{
    var ref = new Firebase("https://mateentodo.firebaseio.com/");

    $scope.messages = $firebaseArray(ref);

    $scope.addvalue = function()
    {
        $scope.messages.$add(
            {name:$scope.validName}
        );
        $scope.validName = "";
    };

});
