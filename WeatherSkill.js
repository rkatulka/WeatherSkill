var async = require('async');
var http = require('http');
var config = require('./config.js');


exports.handler = function(event, context) {
  console.log(config);
  console.log('Weather Skill');
  context.done();
}
