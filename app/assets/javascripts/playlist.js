$(function() {
  var playlist_create_btn = $('.create_playlist');

  playlist_create_btn.on('click', function(event) {
    event.preventDefault();
    var playlist_name = $('#playlist_name').val();
    console.log(playlist_name);
    $.ajax({
      url: "https://api.spotify.com/v1/users/" + gon.username + "/playlists",
      method: 'POST',
      data: JSON.stringify({name: playlist_name}),
      contentType: 'application/json',
      dataType: 'json',
      headers: {
        Authorization: "Bearer " + gon.access_token
      },
      success: function(data) {
        console.log(data);
      },
      error: function(data) {
        console.log(data);
      }
    });

    $.ajax({
      url: "https://api.spotify.com/v1/users/" + gon.username + "/playlists/" + gon.playlist + "/tracks",
      method: 'POST',
      data: JSON.stringify({uris: ["spotify:track:4iV5W9uYEdYUVa79Axb7Rh", "spotify:track:1301WleyT98MSxVHPZCA6M"]}),
      contentType: 'application/json',
      dataType: 'json',
      headers: {
        Authorization: "Bearer " + gon.access_token
      },
      success: function(data) {
        console.log(data);
      },
      error: function(data) {
        console.log(data);
      }
    });
  })
});

