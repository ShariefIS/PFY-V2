(function () {
    'use strict';

    angular
        .module('pfy-imran')
        .controller('LayoutController', LayoutController);

    LayoutController.$inject = ['$scope', '$state'];
    function LayoutController($scope, $state) {
        var vm = this;
        $scope.logout = () => {
            toastr.success("You have been Logged out");
            $state.go("login");
        }

        activate();

        ////////////////

        function activate() {
            $state.go("main.contact");
        }
    }
})();