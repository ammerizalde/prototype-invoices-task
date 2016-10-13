class ModalWindowController{
  constructor(items,$uibModalInstance){
    this.items=items;
    console.log('Hello '+items);
  }
}

export default ModalWindowController;
