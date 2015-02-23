import React from 'react';
import {Link} from 'react-router';

export default React.createClass({
  render() {
    return (
      <div>
        <p>Sorry, the page you were looking for was not found!</p>
        <p><Link to="home">Back to Home</Link></p>
      </div>
    );
  }
});
