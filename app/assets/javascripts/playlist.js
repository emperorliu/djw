function getIds() {
        var results = []
        var table = $('tbody tr').not('.filtered');
        table.each(function() {
            results.push($(this).data('id'));
        });
        return results;
    }

function showDialog(message, clss) {
    $('<div class="dialog ' + clss +'" style="display:none;">' +
            message +
            '<span class="close-dialog glyphicon glyphicon-remove" style="color:#81b900;">' +
            '</span>' +
        '</div>'
    ).prependTo('body').fadeIn(1000);
    $('.close-dialog').click(function() {
        var time = 1500;
        $(this).parent().fadeOut(time);
        setTimeout(function(){ 
            $(this).parent().remove();
        }, time);
    });
}

$(document).ready(function() {

    $('#playlist tbody tr').click(function() {
        var current_audio = $(this).find('td audio').get(0);
        if (!current_audio.paused) {
            current_audio.pause();
            $(this).removeClass('selected-row');
        } else {
            $('#playlist tbody tr audio').get().forEach(function(a) {
                a.pause(); // Stop playing
                a.currentTime = 0; // Reset time
            });
            current_audio.play();
            $('.tablesorter tr.selected-row').removeClass('selected-row');
            $(this).addClass('selected-row');
        }
    });

    $('.create_playlist').click(function(event) {
        event.preventDefault();
        var playlist_name = $('#playlist_name').val();
        var access_token = $('div.content').data('id');
        var username = $('div.content').data('username');
        console.log(playlist_name);
        $.ajax({
            url: "https://api.spotify.com/v1/users/" + username + "/playlists",
            method: 'POST',
            data: JSON.stringify({
                name: playlist_name
            }),
            contentType: 'application/json',
            dataType: 'json',
            headers: {
                Authorization: "Bearer " + access_token
            },
            success: function(data) {
                var song_uris_array = getIds();
                $.ajax({
                    url: "https://api.spotify.com/v1/users/" + username + "/playlists/" + data.id + "/tracks",
                    method: 'POST',
                    data: JSON.stringify({
                        uris: song_uris_array
                    }),
                    contentType: 'application/json',
                    dataType: 'json',
                    headers: {
                        Authorization: "Bearer " + access_token
                    },
                    success: function(data) {
                        showDialog("Playlist successfully created! ", 'success');
                        console.log(data);
                    },
                    error: function(data) {
                        showDialog("Error saving playlist, try again. ", 'error');
                        console.log(data);
                    }
                });
                console.log(data);
            },
            error: function(data) {
                showDialog("Error saving playlist, try again. ", 'error');
                console.log(data);
            }
        });
    });

});