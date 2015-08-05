json.array @user_infos.each do |info|
  json.name           info.name
  json.address        info.address
  json.phone          info.phone
  json.email          info.email
  json.password       info.password_digest
