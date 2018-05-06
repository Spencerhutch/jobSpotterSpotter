const express = require('express')
const path = require('path')
var bodyParser = require('body-parser')

require('dotenv').load()

const PORT = process.env.PORT || 5000
var post = require('./src/posting')
var user = require('./src/user')

express()
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({
    extended: true
  }))
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', post.getPosts)

  // Post
  .post('/posting', post.createPost)
  .delete('/post', post.removePost)
  .get('/getList', post.getList)
  .get('/new', (req, res) => res.render('pages/new-post', {active: 'new'}))
  .get('/list', (req, res) => res.render('pages/list', {active: 'list'}))

  // User
  .get('/getUserId', user.getByEmail)
  .post('/user', user.createUser)

  .get('/login', (req, res) => res.render('pages/login', {active: 'login'}))

  .listen(PORT, () => console.log(`Listening on ${ PORT }`))



