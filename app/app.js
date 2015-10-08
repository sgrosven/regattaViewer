(function() {

    var app = angular.module("regattaViewer", []);

    var MainController = function($scope, regattaModel) {

        $scope.regattaJson = regattaModel.readRegattaXml(  $demoRegattaXml);
        $scope.regattaModel = regattaModel;
        $scope.regattaFileName="2013_SWCMiami_Sonar.regatta";
        //$scope.regatta.setRegattaXml(  $demoRegattaXml);

        console.log( "json $scope.regatta.Regatta.$.Name=" + $scope.regattaJson.$.Name);

    };

    app.controller("MainController", MainController);

}());