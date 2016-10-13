  import angular from 'angular';
  import uiRouter from 'angular-ui-router';
  import uiBootsrap from 'angular-ui-bootstrap';
  import lstInvoiceComponent from './lstInvoice.component';
  import modalWindowController from './modalWindow.controller'
  import 'ng-table/bundles/ng-table.min.css';
  import ngTable from 'ng-table';

  let lstInvoiceModule = angular.module('lstInvoice', [uiRouter,uiBootsrap,'ngTable'])
    .config(($stateProvider) => {
      $stateProvider
        .state('lstInvoice', {
          url: '/lstInvoice',
          template: '<lst-invoice></lst-invoice>'
        });
    })
    .controller('modalWindowController',modalWindowController)
    .directive('lstInvoice', lstInvoiceComponent);

  export default lstInvoiceModule;
