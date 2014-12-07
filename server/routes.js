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
        res.send(JSON.parse(data));
      });  
  });

router.route('/artists/:artist_id')

  .get(function(req, res) {
    var artist = req.params.artist_id.toLowerCase()

    Result.find({artistName: artist}, function(err, data){
      
      if(data.length){
        if(data[0].artistName === artist){
        console.log("found artist");
        var answer = false;
        if(data.rating > 8){
          answer = true;
        }
       }
        res.send(answer);
      } else {
        pitchfork(req.params.artist_id, function(data){
          console.log("in pitch");
          var answer
          if (data['rating']>8) {
            answer = true
          }
          else {answer = false}
          res.send(JSON.stringify(answer));
          //write to database
          ///////////////////////////////////
          requests(data, function(err) {
              if (err) {
                console.log("ERROR");
              }else{
                console.log("success");
                console.log(data);
              }
            });
          /////////////////////////////////////
        })
      }
    })
  
  });

// Get a single artist api/artists/:artist_id

module.exports = router;


// {artistName: 'Wilco', url: 'pitchfork.com/wilco', rating: 8, timestamp: 'Monday'}
