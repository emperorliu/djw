Rails.application.config.middleware.use OmniAuth::Builder do
  provider :spotify, "d3c5554fbc6d4c8fa7c8f1e447af3fc3", "77296273a94446f6ad96e89cb65ca490", scope: 'user-read-email playlist-modify-public playlist-modify-private playlist-read-private user-library-read user-library-modify'
end