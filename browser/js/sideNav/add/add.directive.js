app.directive('add', () => {
  return {
    restrict: 'E',
    templateUrl: '/js/sideNav/add/add.html',
    controller: 'addCtrl'
  };
});

app.controller('addCtrl', ($scope, bathroom) => {

  $scope.bathroom = {};

  $scope.submit = (newBRoom) => {
    bathroom.postBathroom(newBRoom);
  };

  $scope.get = () => {
    bathroom.getAllBathrooms()
      .then(b => {
        console.log(b);
      })
  }


});
