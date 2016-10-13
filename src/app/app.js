import angular from 'angular';
import uiRouter from 'angular-ui-router';
import appComponent from './app.component';
import Common from '../common/common';
import Components from '../components/components';
import 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import '../style/app.css';

let appModule = angular.module('myApp', [uiRouter,Common.name,Components.name]).directive('app', appComponent);

export default appModule;
