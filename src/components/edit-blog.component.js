import React, {Component} from 'react';
import axios from 'axios';

/* Edit an existing Blog. */
export default class EditBlog extends Component {
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

  /* Load page with Blog to be modified. */
  componentDidMount() {
    axios.get("http://localhost:5000/blogs/"+this.props.match.params.id)
      .then(response => {
        this.setState({
          username: response.data.username,
          content: response.data.content,
        })
      })
      .catch(function (error) {
        console.log(error);
      })
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

  /* Update Blog and redirect to blog page. */
  onSubmit(e) {
    e.preventDefault();

    const blog = {
      username: this.state.username,
      content: this.state.content,
    }

    console.log(blog);

    axios.post('http://localhost:5000/blogs/update/'+this.props.match.params.id, blog)
      .then(res => console.log(res));

    window.location = '/blogs';
  }

  render() {
    return (
      <div>
        <h3>Edit Blog</h3>
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
          <input type="submit" value="Confirm" className="btn btn-dark" />
        </div>
        </form>
      </div>
    )
  }
}
