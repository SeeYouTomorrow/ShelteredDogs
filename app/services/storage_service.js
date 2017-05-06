var storageService = angular.module('storageService', []);
storageService.factory('getLocalStorage', function () {
    var animalsList = {};
    return {
        updateAnimals: function (animalsArray) {
            if (window.localStorage && animalsArray) {
                //Save data to Local Storage
                localStorage.setItem("animals", angular.toJson(animalsArray));
            }
            animalsList = animalsArray;
        },
        getAnimals: function () {
            //Get data from Local Storage
            animalsList = angular.fromJson(localStorage.getItem("animals"));
            return animalsList ? animalsList : [];
        }
    };
});
