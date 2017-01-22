var config = {
  apiKey: "AIzaSyATqD4uLdQ0WF5Ca1uytQ7jFRYLrjLJOHs",
  authDomain: "rackin-e70be.firebaseapp.com",
  databaseURL: "https://rackin-e70be.firebaseio.com",
  storageBucket: "rackin-e70be.appspot.com",
  messagingSenderId: "1074873337266"
};
firebase.initializeApp(config);

var app = angular.module('RackinApp', ['ngMaterial','firebase']);

app.config(function($mdThemingProvider) {
  var theme = $mdThemingProvider.theme('default');
  theme.primaryPalette('blue');
  theme.accentPalette('yellow');
});


