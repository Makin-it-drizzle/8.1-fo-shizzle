json.array! @users.each do |info|
  json.id             info.id
  json.name           info.name
  json.address        info.address
  json.phone          info.phone
  json.email          info.email
  json.password       info.password_digest
end