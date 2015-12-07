app.controller('PlaylistCtrl', function($scope, $stateParams, ArtistFactory, PlaylistFactory, SongFactory) {
    $scope.playlist = PlaylistFactory.getById($stateParams.playlistId)

    SongFactory.getAllSongs()
    .then(function(songs) {
        console.log(songs)
        $scope.songs = songs;
    });
    PlaylistFactory.getPlaylistSongs($stateParams.playlistId)
    .then(function(songs) {
        $scope.playlist.songs = songs;
    })
    $scope.addSong = function(song) {
        PlaylistFactory.addSong($stateParams.playlistId, song)
        .then(function resolve(song) {
            $scope.playlist.songs.push(song);
        });
    }
    $scope.fetchArtistById(artistId) {
        return ArtistFactory.fetchArtistById(artistId);
    }
});
