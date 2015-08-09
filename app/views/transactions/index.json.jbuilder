json.array! @transactions.each do |t|
  json.id           t.id
  json.name         t.name
  json.date         t.date
  json.amount       t.amount
  json.category     t.category
end
