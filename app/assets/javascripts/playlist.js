$(document).on('click', '.tablesorter td', function() {
  $('.tablesorter tr.selected-row').removeClass('selected-row');
  $(this).closest('tr').addClass('selected-row');
});

function getIds() {
    var results = []
    var table = $('tbody tr').not('.filtered');
    table.each(function() {
      results.push($(this).data('id'));
    });
    return results;
  }

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
        var song_uris_array = getIds();
        $.ajax({
          url: "https://api.spotify.com/v1/users/" + gon.username + "/playlists/" + data.id + "/tracks",
          method: 'POST',
          data: JSON.stringify({uris: song_uris_array}),
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
        console.log(data);
      },
      error: function(data) {
        console.log(data);
      }
    });
  })
});