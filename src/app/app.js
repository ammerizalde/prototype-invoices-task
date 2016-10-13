import angular from 'angular';
import angularAnimate from 'angular-animate';
import appComponent from './app.component';
import Common from '../common/common';
import Components from '../components/components';
import 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import '../style/app.css';


let appModule = angular.module('myApp', [Common.name,Components.name]).directive('app', appComponent);

export default appModule;
