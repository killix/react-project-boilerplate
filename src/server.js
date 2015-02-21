import express from 'express';
// import Router from 'react-router';
// import routes from './config/routes';
// import renderer from './config/serverRenderer';

let app = express();

app.use(express.static('public', {
  dotfiles: 'ignore',
  etag: true,
  index: false,
  maxAge: '1d',
  redirect: false
}));

app.get('/*',function(req,res) {
  // Router.run(routes, Router.Static, function(Handler) {
    res.send("ok");
  // });
});

var server = app.listen(8080, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
