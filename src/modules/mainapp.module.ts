import * as angular from 'angular';
import * as uiRouter from 'angular-ui-router';


var test = uiRouter;
console.log(test);
angular.module("MainApp", ['uiRouter'])
    .config(config);

config.$inject = ['$stateProvider', '$urlRouterProvider'];
function config($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('public', {});
    $urlRouterProvider.otherwise = '/';
}