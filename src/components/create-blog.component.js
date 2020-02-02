import React, {Component} from 'react';
import axios from 'axios';

/* Create a new Blog. */
export default class CreateBlog extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeContent = this.onChangeContent.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      content: '',
    }
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangeContent(e) {
    this.setState({
      content: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const blog = {
      username: this.state.username,
      content: this.state.content,
    }

    console.log(blog);

    axios.post('http://localhost:5000/blogs/add', blog)
      .then(res => console.log(res));

    window.location = '/blogs';
  }

  render() {
    return (
      <div>
        <h3>Create New Blog</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Name: </label>
            <input type="text"
                required
                className="form-control form-control-sm"
                value={this.state.username}
                onChange={this.onChangeUsername}
                />
          </div>
          <div className="form-group">
            <label>Content: </label>
            <textarea
                required
                className="form-control"
                rows="5"
                value={this.state.content}
                onChange={this.onChangeContent}
                />
          </div>
          <div className="form-group">
          <input type="submit" value="Add" className="btn btn-dark" />
        </div>
        </form>
      </div>
    )
  }
}
