import angular from 'angular';
import uiRouter from 'angular-ui-router';
import googlechart from 'angular-google-chart';
import graphsComponent from './graphs.component';


let graphsModule = angular.module('graphs', [uiRouter,'googlechart'])
  .directive('graphs', graphsComponent);

export default graphsModule;
