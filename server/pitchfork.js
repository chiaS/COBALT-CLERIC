var p = require('pitchfork')
var helper = require('./helpers.js'); 

var pitchfork = function(input, callback){
  var resultt = new p.Search(input)

  resultt.on('ready', function(pitchforkResults){
    var data = {};
    var arr = [];
    data.artistName = pitchforkResults[0].attributes.artist;
    data.url = pitchforkResults[0].attributes.url;
    data.timestamp = Date.now()


    

    pitchforkResults.forEach(function(review, idx){
      arr.push(review.attributes.score);
    });
    data.rating = helper.averageScore(arr)
    
    callback(data)

  });

}


module.exports = pitchfork

// {artistName: 'Wilco', url: 'pitchfork.com/wilco', rating: 8, timestamp: 'Monday'}