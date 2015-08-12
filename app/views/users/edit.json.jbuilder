json.array! @user.each do |info|
  json.name           info.name
  json.email           info.email
  json.password       info.password_digest
end
