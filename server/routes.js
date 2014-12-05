var express    = require('express');    // call express
var pitchfork    = require('./pitchfork.js');
var path = require('path');
var helper = require('./helpers.js');
// var Artist    = require('./dbserver.js');
var Result = require('./results.js');
var requests = require('./requests.js');

var router = express.Router();
var fs = require('fs');



router.use(function(req, res, next) {
  // do logging
  console.log('Something is happening.');
  next(); // make sure we go to the next routes and don't stop here
});

// home page route (http://localhost:8080)
router.get('/', function(req, res) {
  //res.json({ message: 'hooray! welcome to our api!' });
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

// about page route (http://localhost:8080/about)
router.get('/about', function(req, res) {
  res.send('im the about page!');
});

router.route('/artists')
  .get(function(req, res) {
      var artistsFile = path.join(__dirname, '../artist.json');
      fs.readFile(artistsFile, function(err, data){
        console.log(JSON.parse(data));
        res.send(JSON.parse(data));
      });  
  });

router.route('/artists/:artist_id')

  .get(function(req, res) {
    Result.findOne({id: req.params.artist_id}, function(err, artist){
      if(artist){
        res.JSON(artist);
      }else{
        pitchfork(req.params.artist_id, function(pitchforkResults, arr){
        
        //saves results from API to database
        requests.saveResult(pitchforkResults);

        // console.log(pitchforkResults)
        var averageScore = helper.averageScore(arr)

        res.send(JSON.stringify(averageScore))
        //write to database
        //search api function
    })
    }
      // Artist.findById(req.params.artist_id, function(err, artist) {
      //   if (err)
      //     res.send(err);
      //   res.json(artist);
      // });
    });
 });
// Get a single artist api/artists/:artist_id

module.exports = router;
