'use strict';

angular.module('regattaViewer.seriesstanding', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/seriesstanding', {
    templateUrl: 'seriesstanding/seriesstanding.html',
    controller: 'seriesstandingController'
  });
}])

.controller('seriesstandingController', [function() {

}]);