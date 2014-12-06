var Result = require('./results.js');

var saveResult = function (data, callback) {
  //creates new instance of result
  var newResult = new Result({
    artistName: data.artistName,
	  url: data.url,
    timestamp: data.timestamp,
    rating: data.rating
  });

  //saves result to database
  newResult.save(callback);
};

module.exports = saveResult;