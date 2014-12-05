var mongoose = require('mongoose');

//Mongoose Schema definition
var Schema = mongoose.Schema;

//schema for API results
var ResultSchema = new Schema({
	artist: String,
	rating: Number,
	timeStamp: Number
});

//Result Mongoose Model definition
var Result = mongoose.model('results', ResultSchema);

module.exports = Result;