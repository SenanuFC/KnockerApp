// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // Set the statusbar to use the default style, tweak this to
      // remove the status bar on iOS or change it to use white instead of dark colors.
      StatusBar.styleDefault();
    }
  });

})

.controller('AppCtrl', function($scope, $ionicModal, $http, $timeout) {
  $scope.image;
  $scope.img_count = 1;


   $scope.get_image = function () {
            console.log('Getting image');

            // Simulate a login delay. Remove this and replace with your login
            // code if using a login system
            $http.get("http://cs.ashesi.edu.gh/~csashesi/class2015/senanu-fiam-coblavie/kitten.jpg")
                .success(function (response) {
                    $scope.image = response;
                    
                });
                
                console.log("Failed loaded");
    };

    $scope.get_count = function() {
        $http.get("http://cs.ashesi.edu.gh/~csashesi/class2015/senanu-fiam-coblavie/num.json")
          .success(function (response){
            $scope.img_count = response.count;
          })
    };  

});

