class PagesController < ApplicationController
  def home
  end

  def welcome
  end

  def playlist
    @playlist = RSpotify::Playlist.find(params[:owner], params[:id])
    @track_info = @playlist.tracks.map { |track| [track.id, track.name, track.artists.first.name] }
    @track_info.delete_if { |x| x.include? nil }
    spotify_track_ids = @track_info.map { |info| "spotify:track:" + info[0] }
    @profile = spotify_track_ids.map { |track_id| Echowrap.song_profile(:track_id => track_id, :bucket => ['audio_summary', 'song_hotttnesss'])}
  end
end