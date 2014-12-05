var express    = require('express');    // call express
var pitchfork    = require('./pitchfork.js'); 
var path = require('path');
var helper = require('./helpers.js'); 

// var Artist    = require('./dbserver.js');
var Result = require('./results.js');
var requests = require('./requests.js');

var router = express.Router();

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

router.route('/artists/:artist_id')

  .get(function(req, res) {
    Result.findOne({id: req.params.artist_id}, function(err, artist){
      if(artist){
        res.JSON(artist);
      }
      else{
        pitchfork(req.params.artist_id, function(data){
          var rating = data['rating']
          var answer = helper.generateAnswer(rating, function(rating){
            if (rating > 8) return true
          });
          //saves results from API to database
          requests.saveResult(data);

          // console.log(pitchforkResults)
        

          res.send(JSON.stringify(answer))
        //write to database
        //search api function
        })
      }
    })
  
  });

// Get a single artist api/artists/:artist_id

module.exports = router;


// {artistName: 'Wilco', url: 'pitchfork.com/wilco', rating: 8, timestamp: 'Monday'}
