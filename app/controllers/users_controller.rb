class UsersController < ApplicationController
  def spotify
    spotify_user = RSpotify::User.new(request.env['omniauth.auth'])
    session[:user_id] = spotify_user.id
    render 'pages/welcome'
  end
end