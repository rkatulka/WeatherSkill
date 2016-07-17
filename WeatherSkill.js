var async = require('async');
var https = require('https');
var config = require('./config');

var darkSkyHost = config.apiHost;
var darkSkyApiKey = config.apiKey;
var richmondCoordinates = config.richmond;
var fullApiPath = '/forecast/' + darkSkyApiKey + '/' + richmondCoordinates.latitude + ',' + richmondCoordinates.longitude;

var requestHourlyForcast = function(callback) {
  var options = {
    host: darkSkyHost,
    path: fullApiPath,
    port: 443
  }
  console.log('here');
  var req = https.request(options, function(resp) {
    var data = '';
    resp.on('data', function(d) {
      data += d;
    })
    resp.on('end', function() {
      console.log('data: ');
      callback(data);
    })
  });
  req.end();
}

exports.handler = function(event, context) {
  requestHourlyForcast(function(result) {
    console.log(result);
    context.done();
  });
}
