'use strict';

var Result = require('./results.js');

var saveResult = function (data, callback) {
  //creates new instance of result
  var artist = data.artistName.toLowerCase();
  var newResult = new Result({
    artistName: artist,
	  url: data.url,
    timestamp: data.timestamp,
    rating: data.rating
  });

  //saves result to database
  newResult.save(callback);
};

module.exports = saveResult;
