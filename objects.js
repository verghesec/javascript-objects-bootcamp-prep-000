
var playlist = { '3 Doors Down': 'Kryptonite' };

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, {[artistName]:songTitle});
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}

console.log(removeFromPlaylist({ Kanye: "Gold Digger" }, "Kanye"));
