var mongoose = require('mongoose');

//temp database hosted on mongoLabs
var uri = 'mongodb://kdr18702:hr21cobalt@ds041157.mongolab.com:41157/cobalt_records';

//connect to MongoLabs database
mongoose.connect(uri);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function(){
	console.log('Mongodb connection open');
});

module.exports = db;


