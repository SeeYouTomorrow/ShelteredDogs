animalsApp.controller('AnimalsController', ['$scope', '$http', function($scope, $http) {

    $scope.animals = [];

    // remove button
    $scope.removeAnimal = function(animal) {
        var removedAnimal = $scope.animals.indexOf(animal);
        $scope.animals.splice(removedAnimal, 1);
    };

    // add button
    $scope.addAnimal = function() {
        $scope.animals.push({
            name: $scope.newAnimal.name,
            breed: $scope.newAnimal.breed,
            age: parseInt($scope.newAnimal.age),
            location: $scope.newAnimal.location
        });
        // just to clear the form after submitting new animal..
        $scope.newAnimal.name = "";
        $scope.newAnimal.breed = "";
        $scope.newAnimal.age = "";
        $scope.newAnimal.location = "";
    };
    // POST button
    $scope.saveMyList = function() {
        var myJsonData = angular.toJson($scope.animals)
        // console.log(myJsonData);
        $http({
            method: 'POST',
            url: '/someUrl',
            data: myJsonData
        }).then(function successCallback() {
            alert('your data was sent')
        }, function errorCallback() {
            alert('error while sending data')
        });
    }
}]);
