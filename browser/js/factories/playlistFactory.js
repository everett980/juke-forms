app.factory('PlaylistFactory', function($http) { 
		var PlaylistFactory = {};
		var cachedPlaylists = [];
		PlaylistFactory.getAllPlaylists = function() {
				return $http.get('/api/playlists')
				.then(function(resData) {
						angular.copy(resData.data, cachedPlaylists);
						return cachedPlaylists;
				});
		}
		PlaylistFactory.create = function (data) { 
				return $http.post('/api/playlists', data) .then(function(response) {
						cachedPlaylists.push(response.data);
					return response.data;
				});
	   	};
		return PlaylistFactory;
});
