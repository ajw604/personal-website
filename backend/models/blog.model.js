mongoose = require('mongoose');

const Schema = mongoose.Schema;

/* A Blog has a user, content, and the date of creation. */
const blogSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true,
    minlength: 7
  }}, {
    timestamps: true
  });

  const Blog = mongoose.model('Blog', blogSchema);

  module.exports = Blog;
