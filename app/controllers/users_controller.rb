class UsersController < ApplicationController
  def spotify
    spotify_user = RSpotify::User.new(request.env['omniauth.auth'])
    session[:user_id] = spotify_user.id
    @playlists = current_user.playlists.select { |playlist| playlist.owner.id == current_user.id }
    render 'pages/welcome'
  end
end