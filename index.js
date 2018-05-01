const express = require('express')
const path = require('path')
var bodyParser = require('body-parser')

require('dotenv').load()

const PORT = process.env.PORT || 5000
var post = require('./src/posting')

express()
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({
    extended: true
  }))
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', post.getPosts)
  .get('/new', (req, res) => res.render('pages/new-post'))
  .get('/list', (req, res) => res.render('pages/list'))
  .post('/posting', post.createPost)
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))



