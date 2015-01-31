$(function() {
  var playlist_create_btn = $('.create_playlist');

  playlist_create_btn.on('click', function(event) {
    event.preventDefault();
    var playlist_name = $('#playlist_name').val();
    console.log(playlist_name);
    $.ajax({
      url: "https://api.spotify.com/v1/users/jefffreak11/playlists",
      method: 'POST',
      data: {name: playlist_name},
      contentType: 'application/json;',
      dataType: 'json',
      headers: {
        Authorization: "Bearer BQCtW2Il402qPJAQTWEI2wxM2T-sPEY_VI_Oe8m2OCsQIUw46MBLBGl9qjSzJZTvr-GJaVlOMwmUl6goI0EkPFQ8OeXwumkdixkYwIc9uIN-pfavBasCBHPjGj5yV93YquoMalcs2_9xo-7Ic9eE-eiGy6Vouu7j3Vem2nUnFiFeapibSREKVWDXL7TdUjvNuGiTsoYYHyYDBTNRYn4elbKW_NcWM8p2_Xrh67JFLcpq"
      },
      success: function(data) {
        console.log(data);
      },
      error: function(data) {
        var r = jQuery.parseJSON(data.responseText);
        alert("Message: " + r.Message);
        alert("StackTrace: " + r.StackTrace);
        alert("ExceptionType: " + r.ExceptionType);
        console.log(data);
      }
    });
  })
});

