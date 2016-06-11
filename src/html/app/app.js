var app = angular.module("appMain", []); 

app.controller("mainCtrl", ['$scope','$document', function($scope, $document) {
  $scope.test = "Works!";
  $scope.rows = [
    {block: 31, track: "1", time:"22:00"},
    {block: 32, track: "2", time:"22:30"},
    {block: 33, track: "3", time:"23:00"}
  ];
  $scope.clicks = 0;
  
//  $scope.adminClicks = function(){
//    alert($scope.clicks);
//    $scope.clicks++; 
//  };
}]);

app.controller("tableViewCtrl", ['$scope', '$http', function($scope, $http) {
  $scope.tableModel = {
    row: {
      header: {
        class: "rowHeaderClass"
      },
      body: {
        class: "rowBodyClass"
      }
    },
    cols: [
      {
        header: {
          text: "First",
          class: "FirstHeaderClass"
        },
        body: {
          model: "col1",
          class: "cellBodyClass1"
        }
      },
      {
        header: {
          text: "Second",
          class: "SecondHeaderClass"
        },
        body: {
          model: "col2",
          class: "cellBodyClass2"
        }
      }
    ]
  };
  $scope.data = [
    {col1: 'hadsfga', col2: '1242143'},
    {col1: 'Tesetdata1', col2: '72347'},
    {col1: 'Teseaes', col2: 'r56'}
  ];
}]);
app.controller("sysInfoCtrl", ['$scope', '$http', function($scope, $http) {
  $scope.externalIp = "Unknown";
  $scope.internalIpList = [];
  $http.get("/myip.json").then(
    function(result){
      $scope.externalIp = result.data.external;
      $scope.internalIpList = result.data.internal;
    }
  );
  $scope.reload = function(){
    $http.get("/reload");
  }
  $scope.shutdown = function(){
    if(confirm("Stänga av?")) {
      $http.get("/shutdown").then(
	function(res) {
          console.log(res);
        }
      );
    }
  }
  $scope.reboot = function(){
    if(confirm("Starta om?")) {
      $http.get("/reboot").then(
	function(res) {
          console.log(res);
        }
      );
    }
  }
  
}]);
