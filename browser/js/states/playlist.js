app.config(function ($stateProvider) {
    $stateProvider.state('playlist', {
        url: '/playlists/:playlistId',
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
    })
})
