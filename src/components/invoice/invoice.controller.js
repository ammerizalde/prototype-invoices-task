class InvoiceController {
  constructor(invoiceService,NgTableParams,$filter) {
    this.filter=$filter;
    this.invoices = require("json!./invoice.json");
    this.stock = require("json!../stock/stock.json");
    this.service=invoiceService;
    for (let invoice of this.invoices) {
      invoice.proccessed=false;
      invoice.tableParams=new NgTableParams({}, { dataset: invoice.products});
    }
  }

  proccessInvoices(invoice){
    var scopeController = this;
    if(invoice){
      this.calculateResults(invoice,scopeController);
    }else{//means all the invoices to be proccessed
      for (let invoice of this.invoices) {
        scopeController.calculateResults(invoice,scopeController);
      }
    }
  }

  calculateResults(invoice,scopeController){
    for (let product of invoice.products) {
      var productFoundStock=scopeController.filter('filter')(scopeController.stock,{product_id: product.product_id},true)[0];
      if(productFoundStock){
        product.summary={margin: productFoundStock.cost_price - product.unit_price};
      }else{
        product.summary={message: 'Not in stock yet', margin: 0};
      }
    }
    invoice.proccessed=true;
  }
}

export default InvoiceController;
