app.controller('NewPlaylistCtrl', function($scope, $state, PlaylistFactory) {
    //PlayerFactory potentially not needed
    $scope.logger = function(nameParam) {
            if ($scope.newPlaylistForm.$invalid) return;

            PlaylistFactory.create({
                    'name': nameParam
                })
                .then(function(playlist) {
                    $scope.playlistName = "";
                    $scope.newPlaylistForm.$setPristine();
					$state.go('playlist', {playlistId: playlist._id});
                })
        }
        /*
           $scope.album = theAlbum;

           $scope.isCurrent = function (song) {
           var current = PlayerFactory.getCurrentSong();
           return current && current._id == song._id;
           };
           $scope.start = function (song) {
           PlayerFactory.start(song, $scope.album.songs);
           };

           $scope.generateMailTo = function () {
           if (!$scope.album) return;
           var link = 'Check out this groovy album: http://localhost:1337/#/albums/' + $scope.album._id;
           return 'mailto:?subject=' + $scope.album.name + '&body=' + link;
           };
           */
});
