class UsersController < ApplicationController
  def spotify
    spotify_user = RSpotify::User.new(request.env['omniauth.auth'])
    session[:user_id] = spotify_user.id
    gon.access_token = spotify_user.credentials.token
    gon.username = current_user.id
    @playlists = current_user.playlists(limit: 50, offset: 0).select { |playlist| playlist.total != 0}
    render 'pages/welcome'
  end
end