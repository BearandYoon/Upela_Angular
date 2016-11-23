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
        console.log('timeoutFn()=stop');
        $interval.cancel(timer);
      }
      vm.progressValue++;
      console.log('timeoutFn()');
    }

    var timer = $interval(timeoutFn, 100);
  });
