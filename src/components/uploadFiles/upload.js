import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngFileUpload from 'ng-file-upload';
import uploadComponent from './upload.component';
import '../../style/app.css';

let uploadModule = angular.module('upload', [uiRouter, 'ngFileUpload'])
  .config(($stateProvider) => {
    $stateProvider
      .state('dashboard', {
        url: '/dashboard',
        template: '<graphs></graphs>'
      });
  })
  .directive('upload', uploadComponent);

export default uploadModule;
