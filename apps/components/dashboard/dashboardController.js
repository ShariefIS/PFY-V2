(function () {
    'use strict';

    angular
        .module('pfy-imran')
        .controller('DashboardController', DashboardController);

    DashboardController.$inject = ['$scope'];
    function DashboardController($scope) {
        var vm = this;

        activate();

        ////////////////

        function activate() { }
    }
})();
