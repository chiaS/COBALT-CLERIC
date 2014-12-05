var p = require('pitchfork')


var pitchfork = function(input, callback){
  var resultt = new p.Search(input)

  resultt.on('ready', function(pitchforkResults){
    var arr = [];
    

    pitchforkResults.forEach(function(review, idx){
      arr.push(review.attributes.score);
      // console.log("review #%d: ",idx, review.truncated());
    });
    callback(pitchforkResults, arr)

  });

}


module.exports = pitchfork