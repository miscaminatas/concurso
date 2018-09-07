'use strict';

angular.
module('callback').
component('callback', {

    templateUrl: 'components/callback/callback.template.html',
    controller: ['$scope', '$http', '$routeParams', 'OmhOnFhirApi', '__env', function LoginController($scope, $http, $routeParams, OmhOnFhirApi, env){
        var self = this;
        self.omhOnFhirApi = OmhOnFhirApi;

        //===================================================================================
        // Initialization
        //===================================================================================
        if($routeParams.loginSuccess){
            console.log("Setting login success to: " + $routeParams.loginSuccess);
            self.omhOnFhirApi.setLoginSuccessful(($routeParams.loginSuccess == 'true'));
            $scope.$apply();
        }
        if($routeParams.shimmerId){
            console.log("Setting shimmer id to: " + $routeParams.shimmerId);
            self.omhOnFhirApi.setShimmerId($routeParams.shimmerId);
            $scope.$apply();
        }

    }]
});