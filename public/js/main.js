$(document).ready(function() {
	var resultsTemplate = $('#results-template').html();
	var renderResults = Handlebars.compile(resultsTemplate);

	// When search button is clicked, send search query to server and render search results
	$(document).on('click', '.search-btn', function() {
		$('#search-results').empty();
		var searchInput = $('#search-input').val();

		// Sends get request to /search with the text from the search box
		$.get('/search', { searchInput: searchInput }, function(results) {
			// Renders the array of search results
			results.searchResults.map(function(result) {
				$('#search-results').append(renderResults(result));
			})
		})
		return false;
	})

})