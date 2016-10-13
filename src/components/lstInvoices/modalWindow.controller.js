class ModalWindowController{
  constructor(invoice,NgTableParams,$uibModalInstance){
    this.invoice=invoice;
    this.modalInstance=$uibModalInstance;
    this.tableParams=new NgTableParams({}, { dataset: invoice.products});
  }

  cancel() {
    this.modalInstance.dismiss('cancel');
  }
}

export default ModalWindowController;
