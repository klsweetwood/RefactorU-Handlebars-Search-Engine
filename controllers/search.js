var mongoose = require('mongoose');
var Result = require('../models/searchData.js');

module.exports = {
	
	// Searches the database for the text and sends the results
	findResults: function(req, res) {
		var searchInput = req.query.searchInput.toLowerCase();
		Result.find( { "title" : { $regex : new RegExp(searchInput, "i") } } , function(err, results) {
			res.send({ searchResults: results });
		});
	}
}
