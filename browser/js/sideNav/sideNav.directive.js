app.directive('sideNav', () => {
  return {
    restrict: 'E',
    templateUrl: '/js/sideNav/sideNav.html',
    controller: 'sideNavCtrl'
  }
})

app.controller('sideNavCtrl', ($scope, $mdSidenav) => {
  $scope.openLeftMenu = () => {
    $mdSidenav('left').toggle();
  };
});
