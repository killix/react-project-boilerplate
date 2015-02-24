import React from "react";

export default React.createClass({
  render: function() {
    return (
      <html>
        <head>
          <meta charSet="utf-8" />
          <title>{this.props.title}</title>
          <meta name="viewport" content="width=device-width, user-scalable=no" />
          <link rel="stylesheet" href="/public/app.css"/>
        </head>
        <body>
          <div id="ReactRoot" dangerouslySetInnerHTML={{__html: this.props.markup}} />
          <script dangerouslySetInnerHTML={{__html: this.props.state}} />
          <script type='text/javascript' src="/public/index.js" defer />
        </body>
      </html>
    );
  }
});
