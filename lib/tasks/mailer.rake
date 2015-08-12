namespace :mailer do
  desc 'Sends Welcome Letter'
  task welcome: :environment do
    WelcomeMailer.send_welcome_letter.deliver_later
  end
end
