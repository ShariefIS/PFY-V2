(function () {
    'use strict';

    angular
        .module('pfy-imran')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$scope', '$rootScope', '$state'];
    function LoginController($scope, $rootScope, $state) {
        var vm = this;

        $rootScope.isLoggedIn = true;
        activate();

        ////////////////

        function activate() {
        }
    }
})();