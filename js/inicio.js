function findMe(){
  var output = document.getElementById('map');

  if (navigator.geolocation){
    output.innerHTML = <p>Tu navegador soporta Geolocalización</p>;
  }else{
    output.innerHTML = <p>Tu navegador no soporta Geolocalización</p>;
  }
  function localizacion(posicion){
    var latitude = posicion.coords.latitude;
    var longitude = posicion.coords.longitude;
    output.innerHTML = "<p>latitud: " +latitude+ "<br>Longitud: " +longitude+"</p>";
  }
  function error(){
    output.innerHTML = <p>No se pudo obtener tu ubicación</p>;
  }
  navigator.geolocation.getCurrentPosition(localizacion,error);
}


var map, infoWindow;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {
      lat: -34.397,
      lng: 150.644
    },
    zoom: 6
  });
  infoWindow = new google.maps.InfoWindow;

  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      infoWindow.setPosition(pos);
      infoWindow.setContent('Location found.');
      infoWindow.open(map);
      map.setCenter(pos);
    }, function () {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
    'Error: The Geolocation service failed.' :
    'Error: Your browser doesn\'t support geolocation.');
  infoWindow.open(map);
}

// para que lea e inicialice todo
$(document).ready(function () {});