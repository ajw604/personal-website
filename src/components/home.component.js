import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Container from 'react-bootstrap/Container';

var portrait = require('../images/portrait.jpg');

/* Homepage containing photo and various info. */
export default class Home extends Component {
  render() {
    return(
      <Container className="bg-light">
        <h2>Andrew White</h2>
        <img src={portrait} width="256" height="256"/>
        <h3>Resume</h3>
        <a href="../images/resume.pdf">Resume</a>
        <h3>Github</h3>
        <a href="https://github.com/ajw604">GitHub</a>
      </Container>
    );
  }
}
