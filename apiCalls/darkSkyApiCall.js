var config = require('../config');

var darkSkyHost = config.apiHost;
var darkSkyApiKey = config.apiKey;

var fullApiPath = ""
exports.apiCall = function(date, location, callback) {
  var options = {
    host: darkSkyHost,
    path: fullApiPath,
    port: 443
  }
  var res = date + ' ' + location.latitude + ' ' + location.longitude;
  callback(res);
}







//var fullApiPath = '/forecast/' + darkSkyApiKey + '/' + richmondCoordinates.latitude + ',' + richmondCoordinates.longitude;
