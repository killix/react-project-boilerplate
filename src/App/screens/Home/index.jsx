import React from 'react';

export default React.createClass({
  statics: {
    title: "Home Page Title"
  },
  render() {
    return (
      <div className="HomeContainer">
        <div className={"icon-box"}>
          Lorem ipsum
        </div>
        <div className="icon-box">
          dolor sit amet
        </div>
        <div className="icon-box">
          consectetur adipiscing
        </div>
        <div className="icon-box">
          Lorem ipsum
        </div>
        <div className="icon-box">
          dolor sit amet
        </div>
      </div>
    );
  }
});

