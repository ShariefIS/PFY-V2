(function () {
    'use strict';

    angular.module('pfy-imran')
        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state({
                    name: 'login',
                    url: '/login',
                    templateUrl: './apps/components/login/login.html',
                    controller: 'LoginController'
                })
                .state({
                    name: 'main',
                    url: '/',
                    templateUrl: './apps/components/layout/layout.html',
                    controller: 'LayoutController'
                })
                .state({
                    name: 'main.dashboard',
                    url: 'dashboard',
                    templateUrl: './apps/components/dashboard/dashboard.html',
                    controller: 'DashboardController'
                });
            $urlRouterProvider.otherwise('/');
        });
})();