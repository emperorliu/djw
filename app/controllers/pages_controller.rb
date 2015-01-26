class PagesController < ApplicationController
  def home
  end

  def welcome
  end

  def playlist
    @playlist = RSpotify::Playlist.find(current_user.id, params[:id])
    track_ids = @playlist.tracks.map { |track| "spotify:track:" + track.id }
    @profile = track_ids.map { |track_id| Echowrap.track_profile(:id => track_id, :bucket => 'audio_summary')}
  end
end