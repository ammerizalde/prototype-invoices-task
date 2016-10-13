import template from './graphs.html';
import controller from './graphs.controller';

let graphsComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default graphsComponent;
