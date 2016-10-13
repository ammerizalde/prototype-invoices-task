class UploadController {
  constructor(invoiceService,$scope) {
    //DataDummy
    this.invoices = require("json!../invoice/invoice.json");
    this.log = '';
    this.checked=false;

    $scope.$watch('files', function () {
      $scope.checked=false;
      $scope.upload($scope.files);
    });
    invoiceService.isShowList=false;

    $scope.upload = function (files) {
      if (files && files.length) {
          for (var i = 0; i < files.length; i++) {
            var file = files[i];
            if (!file.$error && file!="") {
              //TODO: call store and valid data
              $scope.checked=true;
              $scope.log='100%';
              invoiceService.isShowList=true;
            }
          }
      }
    }
    $scope.$watch('file', function () {
      if ($scope.file != null) {
          $scope.files = [$scope.file];
        }
    });
}
}

export default UploadController;
