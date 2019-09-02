(function () {
    'use strict';

    angular
        .module('pfy-imran')
        .controller('ContactController', ContactController);

    /** @ngInject */
    function ContactController($scope, $rootScope) {
        var vm = this;
        $rootScope.activeTab = "contact";

        activate();

        ////////////////

        function activate() { }
    }
})();