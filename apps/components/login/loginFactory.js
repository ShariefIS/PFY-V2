(function () {
    'use strict';

    angular
        .module('pfy-imran')
        .factory('LoginService', LoginService);

    /** @ngInject */
    function LoginService() {
        var service = {
            validateUser
        };

        return service;

        ////////////////
        function validateUser() { }
    }
})();