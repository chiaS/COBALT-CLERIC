var p = require('pitchfork')
var s = new p.Search('wilco')

s.on('ready', function(results){
  results.forEach(function(review, idx){
    console.log("review #%d: ",idx, review.truncated());
  });
});

module.exports = s