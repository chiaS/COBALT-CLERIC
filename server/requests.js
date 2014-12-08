'use strict';

var Result = require('./results.js');
var strip = require('./strip.js');
var saveResult = function (data, callback) {
  //creates new instance of result

  var artist = data.artistName.toLowerCase();
  var newResult = new Result({

    artistName: strip(artist),
	  url: data.url,
    timestamp: data.timestamp,
    rating: data.rating,
    cover: data.cover
  });
  console.log(newResult);

  //saves result to database
  newResult.save(callback);
};

module.exports = saveResult;
