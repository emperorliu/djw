class PagesController < ApplicationController
  def home
  end

  def welcome
    @playlists = current_user.playlists(limit: 50, offset: 0).select { |playlist| playlist.total != 0}
  end

  def playlist
    @access_token = session[:access_token]
    @playlist = RSpotify::Playlist.find(params[:owner], params[:id])
    @track_info = @playlist.tracks.map { |track| [track.uri, track.name, track.artists.first.name, track.preview_url, track.album.release_date] }
    @track_info.delete_if { |x| x.include? "spotify:track:null" }
    @profile = @track_info.map { |track| Echowrap.song_profile(:track_id => track[0], :bucket => ['audio_summary', 'song_hotttnesss'])}
  end
end