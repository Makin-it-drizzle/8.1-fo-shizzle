CarrierWave.configure do |config|
  config.fog_provider = 'fog/aws'
  config.fog_credentials = {
    provider:              'AWS',
    aws_access_key_id:     ENV['AWS_ACCESS_KEY_ID'],
    aws_secret_access_key: ENV['AWS_SECRET_ACCESS_KEY']
  }

  if Rails.env.test?
    config.storage = :file
    config.enable_processing = false
    config.root = "#{Rails.root}/tmp"

  elsif Rails.env.development?
    config.storage = :file
  else
    config.storage = :fog
  end
  
  config.cache_dir = "#{Rails.root}/tmp/uploads"
  config.fog_directory  = 'foshizzle-avatar'

end
