class PagesController < ApplicationController
  def home
  end

  def welcome
  end

  def playlist
    @playlist = RSpotify::Playlist.find(params[:owner], params[:id])
    gon.playlist = @playlist.id
    @track_info = @playlist.tracks.map { |track| [track.uri, track.name, track.artists.first.name] }
    @track_info.delete_if { |x| x.include? "spotify:track:null" }
    @profile = @track_info.map { |track| Echowrap.song_profile(:track_id => track[0], :bucket => ['audio_summary', 'song_hotttnesss'])}
  end
end