var darkSky = require('../apiCalls/darkSkyApiCall');
var geocode = require('../apiCalls/geocode');

exports.dailyRainProbability = function(date, city, callback) {
  var location = {};
  return geocode.convertCityToCoordinates(city, function(d) {
    var location = d;
    darkSky.apiCall('7/19/2016', d, function(response) {
      console.log('Dark Sky: ');
      console.log(response);
    });
    return location;
  });

}
