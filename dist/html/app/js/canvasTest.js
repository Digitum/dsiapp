app.controller('canvasTestCtrl',['$scope', function($scope){
  $scope.test = "CanvasTestCtrl loaded!";
  // Create Clock Canvas
  var clockCanvas = $('<canvas/>',{'class':'ctxClock'})
    .width(100)
    .height(100);
  var cv = clockCanvas[0];
  console.log(cv);
  var ctx = cv.getContext("2d");
  ctx.fillStyle="#FF0000";
  ctx.fillRect(0,0,150,75);
  $('.clock').append(clockCanvas);
  console.log($('.clock'));

//  var c = document.getElementById("myCanvas");
//  var ctx = c.getContext("2d"); 
//  ctx.fillStyle = "#FF0000";
//  ctx.fillRect(0,0,150,75);

}]);


