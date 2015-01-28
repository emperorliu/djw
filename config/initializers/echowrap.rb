Echowrap.configure do |config|
    config.api_key = ENV["ECHOWRAP_API_KEY"]
    config.consumer_key = ENV["ECHOWRAP_CONSUMER_KEY"]
    config.shared_secret = ENV["ECHOWRAP_SHARED_SECRET"]
end