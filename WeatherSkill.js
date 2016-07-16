var async = require('async');
var http = require('http');
var config = require('./config');

exports.handler = function(event, context) {
  console.log(event);
  console.log(config);
  console.log('Weather Skill');
  context.done();
}
