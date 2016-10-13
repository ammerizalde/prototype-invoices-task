class StockController {
  constructor(NgTableParams) {
    let stocks=require("json!./stock.json");
    this.tableParams=new NgTableParams({}, { dataset: stocks});
  }
}

export default StockController;
