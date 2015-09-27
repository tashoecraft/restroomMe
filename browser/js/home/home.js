app.config($stateProvider => {
  $stateProvider.state('home', {
    url: '/',
    templateUrl: 'js/home/home.html',
    controller: 'mapCtrl'
  });
});


app.controller('mapCtrl', ($scope) => {
  $scope.map = L.map('map').setView([40.705132, -74.009258], 16);
  startLoading();
  getLocation();
  L.tileLayer(
      'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 20,
        minZoom: 12,
        id: 'tashoecraft.cif1dnf131vqpsaluywrwyml2',
        accessToken: 'pk.eyJ1IjoidGFzaG9lY3JhZnQiLCJhIjoiY2lmMWRuZzhzMGJ2MnNrbTJsMDJpY3ZsMiJ9.6tddAL7xsZTX7r8dDarNsA'
      })
    .addTo($scope.map);
  var myLayer = L.mapbox.featureLayer().addTo($scope.map);
  L.mapbox.accessToken =
    'pk.eyJ1IjoidGFzaG9lY3JhZnQiLCJhIjoiY2lmMWRuZzhzMGJ2MnNrbTJsMDJpY3ZsMiJ9.6tddAL7xsZTX7r8dDarNsA';


  // Once we've got a position, zoom and center the map
  // on it, and add a single marker.
  $scope.map.on('locationfound', function(e) {
    finishedLoading();
    console.log('location found');
    $scope.map.fitBounds(e.bounds);

    myLayer.setGeoJSON({
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [e.latlng.lng, e.latlng.lat]
      },
      properties: {
        'title': 'Here I am!',
        'marker-color': '#106CC8',
        'marker-symbol': 'toilets'
      }
    });
  });

  // If the user chooses not to allow their location
  // to be shared, display an error message.
  $scope.map.on('locationerror', function() {
    geolocate.innerHTML = 'Position could not be found';
  });

  function startLoading() {
    $scope.isLoading = true;
  }

  function finishedLoading() {
    $scope.loading = false;
  }

  function getLocation() {

    if (navigator.geolocation) {
      $scope.map.locate();
    } else {
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
  }



});
