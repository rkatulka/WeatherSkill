var config = require('../config');

var darkSkyHost = config.apiHost;
var darkSkyApiKey = config.apiKey;


exports.apiCall = function(date, location, callback) {
  var options = {
    host: darkSkyHost,
    //path: fullApiPath,
    port: 443
  }
  var res = date + ' ' + location;
  callback(res);
}







//var fullApiPath = '/forecast/' + darkSkyApiKey + '/' + richmondCoordinates.latitude + ',' + richmondCoordinates.longitude;
