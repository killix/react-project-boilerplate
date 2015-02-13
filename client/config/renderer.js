import React from 'react';

export default function(Handler, state) {
  React.render(<Handler/>, global.document.body);
};
