import angular from 'angular';
import uiRouter from 'angular-ui-router';
import invoiceComponent from './invoice.component';
import 'ng-table/bundles/ng-table.min.css';
import ngTable from 'ng-table';

let invoiceModule = angular.module('invoice', [uiRouter,'ngTable'])
  .config(($stateProvider) => {
    $stateProvider
      .state('invoices', {
        url: '/invoices',
        template: '<invoice></invoice>'
      });
  })
  .directive('invoice', invoiceComponent);

export default invoiceModule;
