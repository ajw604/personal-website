import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import Home from "./components/home.component";
import BlogList from "./components/blog-list.component";
import CreateBlog from "./components/create-blog.component";
import EditBlog from "./components/edit-blog.component";

function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br/>
      <Route path="/" exact component={Home} />
      <Route path="/blogs" exact component={BlogList} />
      <Route path= "/create" component={CreateBlog} />
      <Route path="/edit/:id" component={EditBlog} />
      </div>
    </Router>
  );
}

export default App;
