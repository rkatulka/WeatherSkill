exports.helloWorld = function() {
  console.log("Hello World from dailyRain.js");
}

var darkSky = require('../apiCalls/darkSkyApiCall');


exports.dailyRainProbability = function(date, location, callback) {
  darkSky.apiCall('7/17/2016', 'richmond', function(response) {
    console.log(response);
  })
}
