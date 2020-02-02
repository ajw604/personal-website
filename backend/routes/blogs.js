const router = require('express').Router();
let Blog = require('../models/blog.model');

/* Load the page with Blogs in chronological order. */
router.route('/').get((req, res) => {
  Blog.find()
    .then(blogs => res.json(blogs))
    .catch(err => res.status(400).json('Error: ' + err));
});

/* Add a new Blog to the database. */
router.route('/add').post((req, res) => {
  const username = req.body.username;
  const content = req.body.content;
  const date = new Date();

  const newBlog = new Blog({
    username, content, date
  });

  newBlog.save()
    .then(() => res.json('Post sent!'))
    .catch(err => res.status(400).json(err));
});

/* Retreive Blog with ID */
router.route('/:id').get((req, res) => {
  Blog.findById(req.params.id)
    .then(blog => res.json(blog))
    .catch(err => res.status(400).json(err));
});

/* Delete a Blog. */
router.route('/:id').delete((req, res) => {
  Blog.findByIdAndDelete(req.params.id)
    .then(() => res.json('Blog deleted'))
    .catch(err => res.status(400).json('Error: ' + err));
});

/* Update an existing Blog. */
router.route('/update/:id').post((req, res) => {
        Blog.findById(req.params.id)
            .then(blog => {
                blog.username = req.body.username;
                blog.content = req.body.content;

            blog.save()
                .then(() => res.json('Blog updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
            })
            .catch(err => res.status(400).json("Error: " + err));
    });

module.exports = router;
