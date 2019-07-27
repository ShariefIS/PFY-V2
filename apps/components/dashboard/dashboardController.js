(function () {
    'use strict';

    angular
        .module('pfy-imran')
        .controller('DashboardController', DashboardController);

    DashboardController.$inject = ['$scope', '$rootScope'];
    function DashboardController($scope, $rootScope) {
        var vm = this;
        $rootScope.activeTab = "home";
        activate();
        ////////////////

        function activate() { }
    }
})();
