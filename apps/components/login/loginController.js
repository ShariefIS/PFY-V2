(function () {
    'use strict';

    angular
        .module('pfy-imran')
        .controller('LoginController', LoginController);

    /** @ngInject */
    function LoginController($scope, $rootScope, $state) {
        var vm = this;
        $scope.isLogin = true;
        $scope.matchError = false;
        $rootScope.isLoggedIn = true;
        activate();

        ////////////////

        function activate() { }
    }
})();