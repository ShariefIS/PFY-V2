(function () {
    'use strict';

    angular
        .module('pfy-imran')
        .controller('AboutUsController', AboutUsController);

    AboutUsController.$inject = ['$scope', '$rootScope'];
    function AboutUsController($scope, $rootScope) {
        var vm = this;
        $rootScope.activeTab = "about";

        activate();

        ////////////////

        function activate() { }
    }
})();