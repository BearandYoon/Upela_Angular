'use strict';

/**
 * @ngdoc function
 * @name UpelaApp.controller:OrderProgressCtrl
 * @description
 * # OrderProgressCtrl
 * Controller of the UpelaApp
 */
angular.module('UpelaApp')
  .controller('OrderProgressCtrl', function ($interval) {
    var vm = this;
    vm.progressValue = 0;

    function timeoutFn() {
      if(vm.progressValue >= 90) {
        $interval.cancel(timer);
      }
      vm.progressValue++;
    }

    var timer = $interval(timeoutFn, 100);
  });
