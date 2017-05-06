animalsApp.controller('AnimalsController', ['$scope', '$http', 'getLocalStorage', function ($scope, $http, getLocalStorage) {
    //Read the animals List from LocalStorage
    $scope.animals = getLocalStorage.getAnimals();

    //count the animal List
    $scope.count = $scope.animals.length;

    //Add animal
    //Call updateAnimals() to update the locally stored animal List
    //Clear the input form
    //Update the count
    $scope.addAnimal = function () {
        $scope.animals.push({
            'name': $scope.newAnimal.name,
            'breed': $scope.newAnimal.breed,
            'age': $scope.newAnimal.age,
            'location': $scope.newAnimal.location
        });

        getLocalStorage.updateAnimals($scope.animals);

        $scope.newAnimal.name = '';
        $scope.newAnimal.breed = '';
        $scope.newAnimal.age = '';
        $scope.newAnimal.location = '';

        $scope.count = $scope.animals.length;
    };

    //Delete animal
    //Call updateAnimals() to update the locally stored animal List
    //Update the count
    $scope.deleteAnimal = function (animal) {
        $scope.animals.splice($scope.animals.indexOf(animal), 1);
        getLocalStorage.updateAnimals($scope.animals);
        $scope.count = $scope.animals.length;
    };

    $scope.postMyList = function() {
        var myJsonData = angular.toJson($scope.animals);
        // console.log(myJsonData);
        $http({
            method: 'POST',
            url: '/someUrl',
            data: myJsonData
        }).then(function successCallback() {
            alert('your data was sent');
        }, function errorCallback() {
            alert('error while sending data');
        });
    }
}]);
