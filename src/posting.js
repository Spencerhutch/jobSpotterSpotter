var Bookshelf = require('./bookshelf')

module.exports.getPosts = async (req, res) => {
  const posts = await Bookshelf.getPosts()

  console.log('Posts: ', JSON.stringify(posts, null, 2))

  res.render('pages/index', {data: posts})
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
    created: new Date()
  })

  res.redirect('/')
}