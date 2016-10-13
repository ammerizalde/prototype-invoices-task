import angular from 'angular';
import uiRouter from 'angular-ui-router';
import invoiceComponent from './invoice.component';
import invoiceService from './invoice.service';
import 'ng-table/bundles/ng-table.min.css';
import ngTable from 'ng-table';

let invoiceModule = angular.module('invoice', [uiRouter,'ngTable'])
  .config(($stateProvider) => {
    $stateProvider
      .state('invoices', {
        url: '/invoices',
        template: '<upload></upload><invoice></invoice>'
      });
  })
  .directive('invoice', invoiceComponent)
  .service('invoiceService', invoiceService);

export default invoiceModule;
