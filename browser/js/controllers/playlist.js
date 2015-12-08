app.controller('PlaylistCtrl', function($scope, $stateParams, ArtistFactory, PlaylistFactory, SongFactory) {
    PlaylistFactory.getById($stateParams.playlistId)
    .then(function resolve(playlist) {
        $scope.playlist = playlist;

        SongFactory.getAllSongs()
        .then(function(songs) {
            $scope.songs = songs;
        });
        PlaylistFactory.getPlaylistSongs($stateParams.playlistId)
        .then(function(songs) {
            console.log($scope.playlist)
            $scope.playlist.songs = songs.map(function(song) {
                song = SongFactory.convert(song, $scope.playlist.artists);
                return song
            });
        })
        $scope.addSong = function(song) {
            PlaylistFactory.addSong($stateParams.playlistId, song)
            .then(function resolve(song) {
                $scope.playlist.songs.push(song);
                $scope.songName = '';
            });
        }
        $scope.fetchArtistById = function(artistId) {
            return ArtistFactory.fetchArtistById(artistId);
        }
    });
});
