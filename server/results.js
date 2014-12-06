var mongoose = require('mongoose');

//Mongoose Schema definition
var Schema = mongoose.Schema;

//schema for API results
var ResultSchema = new Schema({
	artistName: String,
	url: String,
	timestamp: Number,
	rating: Number
});

//Result Mongoose Model definition
var Result = mongoose.model('results', ResultSchema);

module.exports = Result;