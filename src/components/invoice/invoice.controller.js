class InvoiceController {
  constructor(NgTableParams,$filter) {
    this.filter=$filter;
    this.invoices = require("json!./invoice.json");
    this.stock = require("json!../stock/stock.json");
    angular.forEach(this.invoices,function(invoice){
      invoice.selected=false;
      invoice.tableParams=new NgTableParams({}, { dataset: invoice.products});
    });
  }
  proccessInvoices(){
    var invoices = this.filter('filter')(this.invoices,{selected: true},true);
    var scopeController = this;
    angular.forEach(invoices,function(invoice){
      angular.forEach(invoice.products,function(product){
        var productFoundStock=scopeController.filter('filter')(scopeController.stock,{product_id: product.product_id},true)[0];
        if(productFoundStock){
          product.summary={margin: productFoundStock.cost_price - product.unit_price};
        }else{
          product.summary={message: 'Not in stock yet', margin: 0};
        }
      });
    });
    console.log(invoices);
  }
}

export default InvoiceController;
