class StockController {
  constructor(NgTableParams,$filter, $scope) {
    this.filter=$filter;
    this.stocks = require("json!../stock/stock.json");
    $scope.stocks=require("json!../stock/stock.json");
  //  $scope.stock.tableParams=new NgTableParams({}, { dataset: $scope.stocks});

    angular.forEach($scope.stocks,function(stock){
      stock.selected=false;
      stock.tableParams=new NgTableParams({}, { dataset: stock});
    });


  }


}

export default StockController;
