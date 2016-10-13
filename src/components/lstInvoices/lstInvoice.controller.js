class LstInvoiceController {
  constructor(NgTableParams,$uibModal) {
    this.modal=$uibModal;
    let lstInvoice = require("json!../invoice/invoice.json");
    this.tableParams=new NgTableParams({}, { dataset: lstInvoice});
  }
  openWindow(invoice){
    var modalInstance = this.modal.open({
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      templateUrl: 'myModalContent.html',
      controller: 'modalWindowController',
      controllerAs: 'vm',
      size: 'lg',
      resolve: {
        invoice: function () {
          return invoice;
        }
      }
    });
  }
}

export default LstInvoiceController;
