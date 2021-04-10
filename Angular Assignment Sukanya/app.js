var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider

  .when('/', {
    templateUrl : 'pages/main.html',
    controller  : 'MainController'
  })

  .when('/home', {
    templateUrl : 'pages/home.html',
    controller  : 'HomeController'
  })

  .when('/register', {
    templateUrl : 'pages/register.html',
    controller  : 'RegisterController'
  })

  .otherwise({redirectTo: '/'});
});

app.controller('MainController', function() {

});

app.controller('HomeController', function($scope) {
  $scope.name="demo",
  $scope.rollno=123,
  $scope.email="asdf123@gmail.com" 
});

app.controller('RegisterController', function($scope) {

$scope.first=0,
$scope.second=0,
$scope.third=0,
$scope.fourth=0


});