var express    = require('express');    // call express
var Artist    = require('./dbserver.js');

var router = express.Router();

router.use(function(req, res, next) {
  // do logging
  console.log('Something is happening.');
  next(); // make sure we go to the next routes and don't stop here
});

// home page route (http://localhost:8080)
router.get('/', function(req, res) {
  res.json({ message: 'hooray! welcome to our api!' }); 
});

// about page route (http://localhost:8080/about)
router.get('/about', function(req, res) {
  res.send('im the about page!'); 
});

router.route('/artists')
  .get(function(req, res) {

      // Artist.find(function(err, artists) {
      //   if (err)
      //     res.send(err);

      //   res.json(artists);
      // });
    });

router.route('/artists/:artist_id')
  .get(function(req, res) {
      res.send(req.params.artist_id)
      // Artist.findById(req.params.artist_id, function(err, artist) {
      //   if (err)
      //     res.send(err);
      //   res.json(artist);
      // });
    });

// Get a single artist api/artists/:artist_id

module.exports = router;