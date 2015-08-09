User.create!([
  {name: 'Sean', email: 'sean@dollaz.com', password: 'password', password_confirmation: 'password'},
  {name: 'Meeeesh', email: 'meeesh@dollaz.com', password: 'password', password_confirmation: 'password'},
  {name: 'Tibby', email: 'tibby@dollaz.com', password: 'password', password_confirmation: 'password' }
])
Transaction.create!([
  {user_id: 1, name: 'Harris Teeter', date: '2015-10-10', amount: 1000, category: 'food'},
  {user_id: 1, name: 'Five Guys', date: '2015-11-22', amount: 1200, category: 'food'},
  {user_id: 1, name: 'Lows', date: '2015-11-23', amount: 12000, category: 'appliance'}
])
