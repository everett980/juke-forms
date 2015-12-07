app.config(function ($stateProvider) {
	$stateProvider.state('newPlaylist', {
		url: '/playlist/new',
		templateUrl: '/templates/new-playlist.html',
		controller: 'NewPlaylistCtrl'
	});
});
