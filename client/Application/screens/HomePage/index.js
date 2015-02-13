import React from 'react';
import Slider from 'components/Slider';

export default React.createClass({
  render() {
    return (
      <div style={{backgroundColor: "#FFF"}}>
        HomePage
        <Slider transition={200} marker={}>
          <img src="http://placehold.it/50x30"/>
          <img src="http://placehold.it/80x30"/>
          <img src="http://placehold.it/100x30"/>
        </Slider>
      </div>
    );
  }
});

