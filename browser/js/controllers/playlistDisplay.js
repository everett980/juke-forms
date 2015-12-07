app.controller('PlaylistDisplayCtrl', function($scope, PlaylistFactory) {
	PlaylistFactory.getAllPlaylists().then(function(data) {
			$scope.playlists = data;
	});
});
