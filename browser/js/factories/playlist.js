app.factory('PlaylistFactory', function($http, $q) {
		var PlaylistFactory = {},
			cachedPlaylists = [],
			cachedSongs = [];


		PlaylistFactory.create = function (data) {
				return $http.post('/api/playlists', data) .then(function resolve(response) {
						cachedPlaylists.push(response.data);
					return response.data;
				});
	   	};
		PlaylistFactory.getAllPlaylists = function() {
				return $http.get('/api/playlists')
				.then(function resolve(resData) {
						angular.copy(resData.data, cachedPlaylists);
						return cachedPlaylists;
				});
		}
		PlaylistFactory.getById = function(playlistId) {
				return $http.get('api/playlists/' + playlistId)
				.then(res => res.data);
		}
		PlaylistFactory.getPlaylistSongs = function(playlistId) {
			return $http.get('/api/playlists/' + playlistId + '/songs')
			.then(response => response.data)
		}
		PlaylistFactory.addSong = function(playlistId, song) {
			return $http.post('/api/playlists/' + playlistId + '/songs', {song: song})
			.then(res => res.data)
			.catch(console.error.bind(console));
		}

		return PlaylistFactory;
});
