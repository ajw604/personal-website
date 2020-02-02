import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

/* A Blog containing user's name, blog content, and date of
creation along with buttons for edits and deletion. */
const Blog = props => (
  <Container className="p-1">
    <Container className="p-3 bg-light">
      <h6>{props.blog.username} <small className="font-italic">{props.blog.createdAt.substring(0,10)} {props.blog.createdAt.substring(11,16)}</small></h6>
      <p>{props.blog.content}</p>
      <Link to={'/edit/'+props.blog._id}>
        <Button className="btn-secondary btn-sm p-1">edit</Button>
      </Link> <Button className="btn-secondary btn-sm" href='#' onClick={() => {props.deleteBlog(props.blog._id)}}>delete</Button>
    </Container>
  </Container>
);

/* Display a list of Blogs in chronological order
and facilitate creation of more. */
export default class BlogList extends Component {
  constructor(props) {
    super(props);

    this.deleteBlog = this.deleteBlog.bind(this);

    this.state = {blogs: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/blogs')
      .then(response => {
        this.setState({blogs: response.data})
      })
      .catch((error => {
        console.log(error);
      }))
  }

  deleteBlog(id) {
    axios.delete('http://localhost:5000/blogs/' + id)
      .then(res => console.log(res.data));

    this.setState({
      blogs: this.state.blogs.filter(el => el._id !== id)
    })
  }

  blogList() {
    return this.state.blogs.map(curr => {
      return <Blog blog = {curr}
              deleteBlog = {this.deleteBlog}
              key = {curr.createdAt} />;
    })
  }

  render() {
    return (
      <div>
        <h3>Blog</h3>
        <h6>Feel free to add whatever you want! (within reason)</h6>
        <Container className="p-2">
            {this.blogList()}
        </Container>
        <Container className="p-2">
        <Link to={'/create/'}>
          <Button className="btn-dark btn-lg p-1">Create Blog</Button>
        </Link>
        </Container>
      </div>
    )
  }
}
