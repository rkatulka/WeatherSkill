var geocoder = require('geocoder');

exports.convertCityToCoordinates = function(city, callback) {
  var location = {};
  geocoder.geocode(city, function(err, data) {
    if(err) {
      return callback(err);
    }
    location.latitude = data.results[0].geometry.location.lat;
    location.longitude = data.results[0].geometry.location.lng;
    callback(location);
  });
}
