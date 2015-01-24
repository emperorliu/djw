class PagesController < ApplicationController
  def home
  end

  def welcome
  end

  def playlist
    @playlist = RSpotify::Playlist.find(current_user.id, params[:id])
  end
end