class WelcomeMailer < ApplicationMailer

  def send_welcome_letter
    @url = 'www.yahoo.com'
    mail(to: 'meeeesh@dizzle.com', subject: 'Welcome')
  end

end
