import angular from 'angular';
import Invoice from './invoice/invoice';
import Upload from './uploadFiles/upload';
import Graphs from './graphs/graphs';
import Stock from './stock/stock';

export default angular.module('app.components', [
  Invoice.name, Upload.name, Graphs.name,Stock.name
]);
