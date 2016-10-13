  import angular from 'angular';
  import uiRouter from 'angular-ui-router';
  import lstInvoiceComponent from './lstInvoice.component';
  import 'ng-table/bundles/ng-table.min.css';
  import ngTable from 'ng-table';

  let lstInvoiceModule = angular.module('lstInvoice', [uiRouter,'ngTable'])
    .config(($stateProvider) => {
      $stateProvider
        .state('lstInvoice', {
          url: '/lstInvoice',
          template: '<lst-invoice></lst-invoice>'
        });
    })
    .directive('lstInvoice', lstInvoiceComponent);

  export default lstInvoiceModule;
