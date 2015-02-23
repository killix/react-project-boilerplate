import React from "react";

export default React.createClass({
  render: function() {
    let style = <link rel="stylesheet" href={"/public/app.css"}/>;
    let script;

    if (process.env.NODE_ENV === "development") {
      style = [
        style,
        <script type='text/javascript' id="__bs_script__">
          var scriptUrl = "http://localhost:8889/browser-sync/browser-sync-client.2.2.1.js";

          document.write('<script url="'+scriptUrl+'"></script>');
        </script>
      ];
      script = <script type='text/javascript' src={"/public/index.js"} defer />;
    } else {
      script = <script type='text/javascript' src={"http://localhost:8888/public/index.js"} defer />;
    }

    return (
      <html>
        <head>
          <meta charSet="utf-8" />
          <title>{this.props.title}</title>
          <meta name="viewport" content="width=device-width, user-scalable=no" />
          {style}
        </head>
        <body dangerouslySetInnerHTML={{__html: this.props.markup}} />
        <script dangerouslySetInnerHTML={{__html: this.props.state}} />
        {script}
      </html>
    );
  }
});
