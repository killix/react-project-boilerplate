import React from 'react';

export default React.createClass({
  render() {
    return (
      <div className="slider">
        {React.Children.map(this.props.children,function(child) {
          return (
            <div className="slide">
              {child}
            </div>
          );
        })}
      </div>
    );
  }
});
