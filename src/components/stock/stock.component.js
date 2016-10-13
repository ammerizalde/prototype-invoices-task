import template from './stock.html';
import controller from './stock.controller';

let stockComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default stockComponent;
