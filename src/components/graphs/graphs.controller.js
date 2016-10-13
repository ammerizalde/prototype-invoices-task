class GrahpsController {
  constructor($scope, $interval) {
    $scope.myChartObject = {};
    $scope.myChartObject.type = "BarChart";
    $scope.randomQuantity = 10;

    $scope.corona = [
        {v: "Corona"},
        {v: $scope.randomQuantity},
    ];

    $scope.$watch('corona', function () {
      $scope.myChartObject.data = {"cols": [
          {id: "t", label: "Topping", type: "string"},
          {id: "s", label: "Quatity", type: "number"}
      ], "rows": [
          {c: [
              {v: "Carlton Draught"},
              {v: 10},
          ]},
          {c: $scope.corona},
          {c: [
              {v: "Corona Extra Dry"},
              {v: 31}
          ]},
          {c: [
              {v: "VB"},
              {v: 1},
          ]},
          {c: [
              {v: "Pino Grigio"},
              {v: 2},
          ]}
      ]};
    });

    $scope.myChartObject.options = {
        'title': 'Top 5 of products with low stock'
    };

    // DataDummy margins
    $scope.columnObject = {};
    $scope.columnObject.type = "ColumnChart";

    //Dummydata needs to retrive from service
    $scope.columnObject.data = {"cols": [
        {id: "t", label: "Topping", type: "string"},
        {id: "s", label: "Margin", type: "number"}
    ], "rows": [
        {c: [
            {v: "Carlton Draught"},
            {v: -0.2},
        ]},
        {c: [
            {v: "Corona Extra Dry"},
            {v: -0.1},
        ]},
        {c: [
            {v: "VB"},
            {v: 1},
        ]}
    ]};
    $scope.columnObject.options = {
        'title': 'Products required to check price',
        'color': 'gray'
    };

    $interval(update, 1000 * 3);
    function update() {
        $scope.corona = [
            {v: "Corona"},
            {v: Math.round((Math.random() * 5) * 10)},
        ];

    }
  }
}

export default GrahpsController;
