import template from './lstInvoice.html';
import controller from './lstInvoice.controller';

let lstInvoiceComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default lstInvoiceComponent;
