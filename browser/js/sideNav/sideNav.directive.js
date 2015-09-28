app.directive('sideNav', () => {
  return {
    restrict: 'E',
    templateUrl: '/js/sideNav/sideNav.html',
    controller: 'sideNavCtrl'
  };
});

app.controller('sideNavCtrl', ($scope, $mdSidenav) => {
  $scope.filters = ['Public', 'Coffee Shop', 'Hotel', 'Fast Food',
    'Bookstore', 'Other'
  ];

  $scope.selected = ['Public', 'Coffee Shop', 'Hotel', 'Fast Food',
    'Bookstore', 'Other'
  ];

  $scope.toggle = function(item, list) {
    var idx = list.indexOf(item);
    if (idx > -1) list.splice(idx, 1);
    else list.push(item);
  };


  $scope.exists = function(item, list) {
    return list.indexOf(item) > -1;
  };

  $scope.bathrooms = [{
    name: 'Starbucks',
    type: 'Coffee House',
    distance: '.2 miles'
  }, {
    name: 'Starbucks',
    type: 'Coffee House',
    distance: '.2 miles'
  }, {
    name: 'Starbucks',
    type: 'Coffee House',
    distance: '.2 miles'
  }];

  var addIcons = () => {
    $scope.bathrooms.forEach(room => {
      if (room.type === 'Coffee House') {
        room.icon = 'fa fa-coffee';
      } else if (room.type === 'Public') {
        room.icon = 'fa fa-paypal';
      } else if (room.type === 'Fast Food') {
        room.icon = 'fa fa-cutlery';
      } else if (room.type === 'Hotel') {
        room.icon = 'fa fa-h-square';
      } else if (room.type === 'Bookstore') {
        room.icon = 'fa fa-book';
      } else if (room.type === 'other') {
        room.icon = 'fa fa-question-circle';
      }
    });
  };
  addIcons();


});
