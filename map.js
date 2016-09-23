let Map = function(coords) {
  this.map = new google.maps.Map(document.getElementById('map'), {
          center: coords,
          zoom: 14
        });
}
