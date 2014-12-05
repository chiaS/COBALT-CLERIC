var request = require('request');
var Result = require('./results.js');


exports.saveResult = function (pitchforkResults) {
  
  var newResult = new Result({
    artist: pitchforkResults.artist,
	rating: pitchforkResults.rating,
	timeStamp: pitchforkResults.timeStamp,
	url: pitchforkResults.url
  });

  saveResult.save(function(err, newEntry){
  	if(err){
  	  res.send(500);
  	}else{
  	  res.send(200, newEntry);
  	}
  })
};