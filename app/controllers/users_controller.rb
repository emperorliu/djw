class UsersController < ApplicationController
  def spotify
    spotify_user = RSpotify::User.new(request.env['omniauth.auth'])
    session[:user_id] = spotify_user.id
    gon.access_token = spotify_user.credentials.token
    gon.username = current_user.id
    redirect_to welcome_path
  end
end