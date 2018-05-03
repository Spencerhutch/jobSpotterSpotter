var Bookshelf = require('./bookshelf')

module.exports.getByEmail = async (req, res) => {
  const email = 'spencerhutch@gmail.com'
  const user = await Bookshelf.User.where({email: email}).fetch()
  // console.log('Users: ', user)
  // console.log('Users: ', JSON.parse(JSON.stringify(user)).uid)
  res.send({uid: user && JSON.parse(JSON.stringify(user)).uid})
}