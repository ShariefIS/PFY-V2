(function () {
    'use strict';

    angular
        .module('pfy-imran')
        .controller('DashboardController', DashboardController);

    /** @ngInject */
    function DashboardController($scope, $rootScope) {
        var vm = this;
        $rootScope.activeTab = "home";
        activate();
        ////////////////

        function activate() { }
    }
})();
