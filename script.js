
var brdapp=angular.module("brdapp", []);
brdapp.controller("brdctrl",function($scope,$http)
{
    $http.get("sample.json")
    .then(function(response)
    {
        $scope.sample=response.data;
    });
});
