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
                })
                .state({
                    name: 'main.contact',
                    url: 'contact',
                    templateUrl: './apps/components/contact/contact.html',
                    controller: 'ContactController'
                })
                .state({
                    name: 'main.about',
                    url: 'about-us',
                    templateUrl: './apps/components/about/about.html',
                    controller: 'AboutUsController'
                });
            $urlRouterProvider.otherwise('/');
        });
})();