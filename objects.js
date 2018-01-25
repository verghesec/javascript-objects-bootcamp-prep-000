
var playlist = { '3 Doors Down': 'Kryptonite' };

function updatePlaylist(playlist, artistName, songTitle) {
  //playlist.artistName = songTitle;
  return Object.assign({}, playlist, {[artistName]:songTitle});
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName;
  return playlist;
}
