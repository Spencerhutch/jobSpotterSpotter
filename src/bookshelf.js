// In a file named something like bookshelf.js
var knex = require('knex')({
  client: 'pg',
  connection: {
    host : process.env.CONNECTION_HOST,
    user : process.env.CONNECTION_USER,
    password : process.env.CONNECTION_PASSWORD,
    database : process.env.CONNECTION_DATABASE
  }
});

module.exports = require('bookshelf')(knex);

// elsewhere, to use the bookshelf client:
var bookshelf = require('./bookshelf');

var Post = bookshelf.Model.extend({
  tableName: 'posting',
  idAttribute: 'postingId'
});

var User = bookshelf.Model.extend({
  tableName: 'user',
  idAttribute: 'uid'
})


module.exports.getPosts = () => {
  return Post.fetchAll()
}

module.exports.createPost = (data) => {
  const newItem = new Post(data)
  return newItem.save(null, {method: 'insert'})
}

module.exports.User = User
module.exports.Post = Post