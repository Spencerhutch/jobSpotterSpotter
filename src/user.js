var Bookshelf = require('./bookshelf')

module.exports.getByEmail = async (req, res) => {
  const email = req.query.email
  const user = await Bookshelf.User.where({email: email}).fetch()
  res.send({uid: user && JSON.parse(JSON.stringify(user)).uid})
}


module.exports.createUser = async (req, res) => {
  const body = req.body
  const user = {
    email: body.email,
    name: body.fullname
  }

  const newUser = new Bookshelf.User(
    user
  )

  newUser.save(null, {method: 'insert'})

  res.redirect('/')
}