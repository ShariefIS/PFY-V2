// (function () {
//     'use strict';

//     angular
//         .module('trans-portal')
//         .service('httpInterceptor', httpInterceptor)

//     /** @ngInject */
//     httpInterceptor.$inject = ['$rootScope', '$log', '$q', '$state'];
//     function httpInterceptor($rootScope, $log, $q, $state) {

//         var xhrCreations = 0;
//         var xhrResolutions = 0;
//         let ls = new SecureLS();

//         $rootScope.pageLoading = false;
//         $rootScope.inProgress = false;
//         $rootScope.notificationsNumber = 0;
//         $rootScope.notifications = false;
//         $rootScope.initialLoading = false;

//         function isLoading() {
//             // console.log(xhrResolutions, " ", xhrCreations)
//             return xhrResolutions < xhrCreations;
//             // if (xhrResolutions < xhrCreations) {
//             //     return true;
//             // }
//             // else {
//             //     xhrCreations = 0;
//             //     xhrResolutions = 0;
//             //     return false;
//             // }
//         }

//         function updateStatus() {
//             $rootScope.pageLoading = isLoading();
//         }

//         return {
//             request: function (config) {

//                 let user = ls.get("transportalUserDetails");

//                 if (user.userName) {
//                     config.headers.Authorization = 'Bearer ' + user.access_token;
//                     config.headers.userId = user.userId;
//                 }
//                 if (!config.url.includes('showLoader=false')) {
//                     xhrCreations++;
//                     updateStatus();
//                 }

//                 if (config.url == "app/components/layout/layout.html") {
//                     $rootScope.initialLoading = true;
//                 }

//                 return config;
//             },
//             requestError: function (rejection) {
//                 xhrResolutions++;
//                 updateStatus();
//                 $log.error('Request error:', rejection);
//                 return $q.reject(rejection);
//             },
//             response: function (response) {
//                 xhrResolutions++;
//                 updateStatus();
//                 if (response.data.data && response.data.status == "Success") {
//                     toastr.success(response.data.data);
//                 }
//                 else if (response.data.status == "Failed") {
//                     toastr.error(response.data.data);
//                 }
//                 if (response.config.url == "app/components/layout/layout.html") {
//                     $rootScope.initialLoading = false;
//                 }
//                 return response;
//             },
//             responseError: function (rejection) {
//                 xhrResolutions++;
//                 updateStatus();

//                 if (rejection.status === -1) {
//                     console.log(rejection.status)
//                 }
//                 else {
//                     console.log(rejection.status)
//                     if ($state.current.name === "login") {
//                         // swal({
//                         //     title: '',
//                         //     text: "You don't have access to this application",
//                         //     type: 'error',
//                         //     confirmButtonClass: "btn btn-info",
//                         //     buttonsStyling: false
//                         // })
//                     }
//                 }

//                 $log.error('Response error:', rejection);
//                 return $q.reject(rejection);
//             }
//         };
//     }

// }());