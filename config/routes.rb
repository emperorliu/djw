Rails.application.routes.draw do
  root to: 'pages#home'
  get '/auth/spotify/callback', to: 'users#spotify'
  get '/welcome', to: 'pages#welcome'
  get '/playlist/:id', to: 'pages#playlist', as: :playlist
end
