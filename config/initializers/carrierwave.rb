CarrierWave.configure do |config|
  config.fog_provider = 'fog/aws'
  config.fog_credentials = {
    provider:              'AWS',
    aws_access_key_id:     'AKIAJXMUX5KCBKE2HC2Q',
    aws_secret_access_key: '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'
  }
  config.fog_directory  = 'foshizzle-avatar'

end
