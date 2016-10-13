import template from './upload.html';
import controller from './upload.controller';

let uploadComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default uploadComponent;
