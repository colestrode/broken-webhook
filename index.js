'use strict';

let express = require('express');
let app = express();
let port = process.env.PORT || 3000;
let serverTimeout = process.env.SERVER_TIMEOUT || 60;


app.post('/timeout', function(req, res) {

  console.log(JSON.stringify(req.body, null, 2));

  console.log(`Got a POST, but I'm not doing anything with it!`);
});

let server = app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});

server.timeout = serverTimeout * 1000;