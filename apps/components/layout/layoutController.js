(function () {
    'use strict';

    angular
        .module('pfy-imran')
        .controller('LayoutController', LayoutController);

    /** @ngInject */
    function LayoutController($scope, $state) {
        var vm = this;
        $scope.logout = () => {
            toastr.success("You have been Logged out");
            $state.go("login");
        }

        activate();

        ////////////////

        function activate() {
            
        }
    }
})();