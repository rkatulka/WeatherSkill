var geocoder = require('./apiCalls/geocode');
var dailyRain = require('./rain/dailyRain');

dailyRain.dailyRainProbability('7/19/2016', 'Portland, Or', function(d) {
  console.log(d);
});
