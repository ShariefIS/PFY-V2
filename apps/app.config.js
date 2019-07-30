(function () {
    'use strict';

    angular.module('pfy-imran')
        .config(appConfig)
        .run(runConfig)
    /** @ngInject */
    function appConfig($httpProvider, $logProvider) {
        $httpProvider.interceptors.push('httpInterceptor');
        $logProvider.debugEnabled(true);
    }

    /** @ngInject */
    function runConfig($transitions, $state) {
        let ls = new SecureLS();

        toastr.options = {
            "closeButton": false,
            "debug": false,
            "newestOnTop": true,
            "progressBar": true,
            "positionClass": "toast-top-right",
            "preventDuplicates": false,
            "onclick": null,
            "showDuration": "300",
            "hideDuration": "1000",
            "timeOut": "5000",
            "extendedTimeOut": "1000",
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut"
        }
        // Before transition is started
        $transitions.onStart({}, function (trans) {
            let userDetails = ls.get('transportalUserDetails');
            // If user is not logged in, redirect to login page
            if (userDetails == "" && trans.to().name !== "login") {
                toastr.warning("You must login to continue.");
                $state.go("login");
            }

            // If access to one time setup
            if (!userDetails.isOrganizationSetup && trans.to().name == "organizationSetup") {
                // toastr.warning("You don't have this previlage");
                trans.abort();
                if (trans.from().name == "") {
                    $state.go("main.dashboard");
                }
            }
        });
    }

})();