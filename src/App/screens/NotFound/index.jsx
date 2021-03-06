import React from 'react';
import {Link} from 'react-router';

export default React.createClass({
  statics: {
    title: "404 | Page Not Found"
  },
  render() {
    return (
      <div>
        <p>Sorry, the page you were looking for was not found!</p>
        <p><Link to="home" query={{ referer: "404"}}>Back to Home</Link></p>
      </div>
    );
  }
});
