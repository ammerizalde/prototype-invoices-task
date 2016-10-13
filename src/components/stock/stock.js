import angular from 'angular';
import uiRouter from 'angular-ui-router';
import stockComponent from './stock.component';
import 'ng-table/bundles/ng-table.min.css';
import ngTable from 'ng-table';

let stockModule = angular.module('stock', [uiRouter,'ngTable'])
  .directive('stock', stockComponent);

export default stockModule;
