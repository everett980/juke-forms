app.factory('SongFactory', function ($http) {
	var SongFactory = {};
	SongFactory.convert = function (raw, artistObjs) {
		console.log(artistObjs);
		if (typeof artistObjs == 'object') {
			var artistsById = _.indexBy(artistObjs, '_id');
			raw.artists = raw.artists.map(function (artistId) {
				return artistsById[artistId];
			});
		}
		raw.audioUrl = '/api/songs/' + raw._id + '.audio';
		return raw;
	};

	SongFactory.getAllSongs = function() {
		return $http.get('/api/songs')
		.then(response => response.data)
	}

	return SongFactory;
});
