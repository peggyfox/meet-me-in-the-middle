let Directions = function(firstLocation, secondLocation, searchTerm) {
  this.firstLocation = firstLocation,
  this.secondLocation = secondLocation,
  this.searchTerm = secondLocation,
  this.theMiddle = findTheMiddle(this.firstLocation, this.secondLocation);
}

Directions.prototype.findTheMiddle = function() {
  let midLat = midCoord(this.firstLocation.lat, this.secondLocation.lat);
  let midLng = midCoord(this.firstLocation.lng, this.secondLocation.lng);
  return {midLat, midLng};
}

function midCoord(first, second) {
  let half = (first - second) / 2;
  return second + diff;
}

