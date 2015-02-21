import React from 'react';

export default function(Handler) {
  return "<!DOCTYPE html>" +
  React.renderToString(
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <title></title>
        <link rel="stylesheet" href="/index.css" />
      </head>
      <body>
        <Handler/>
      </body>
    </html>
  );
}
