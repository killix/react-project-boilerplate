import React from 'react';

export default React.createClass({
  getInitialState() {
    return {
      isActive: false
    };
  },

  onClick() {
    this.setState({
      isActive: !this.state.isActive
    });
  },

  render() {
    return (
      <div className="HomeContainer">
        <div onClick={this.onClick} className={"icon-box "+ (!this.state.isActive || "active")}>
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

