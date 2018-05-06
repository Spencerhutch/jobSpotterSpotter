var Bookshelf = require('./bookshelf')

module.exports.getPosts = async (req, res) => {
  const posts = await Bookshelf.getPosts()

  // console.log('Posts: ', JSON.stringify(posts, null, 2))

  res.render('pages/index', {data: posts, active: 'home'})
}

module.exports.createPost = async (req, res) => {
  const body = req.body

  const newPost = await Bookshelf.createPost({
    address: body.address,
    latitude: body.latitude,
    longitude: body.longitude,
    address: body.address,
    name: body.name,
    // placeId
    created: new Date(),
    created_by: body.userId
  })

  res.redirect('/')
}

module.exports.getList = async (req, res) => {
  const posts = await Bookshelf.getPosts()
  res.send(posts)
}

module.exports.removePost = async (req, res) => {
  const id = req.body && req.body.id
  // console.log('Remove Id: ', id)
  if (id) {
    await new Bookshelf.Post({postingId: id}).destroy()
    res.send()
  } else {
    res.send()
  }
}