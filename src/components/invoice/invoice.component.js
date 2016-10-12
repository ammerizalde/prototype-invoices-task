import template from './invoice.html';
import controller from './invoice.controller';

let invoiceComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default invoiceComponent;
