const express = require('express');
const app = express();
const cors = require('cors')
const request = require('request');

app.get('/', function (req, res) { 
  res.send('Hello World');
});
let server = app.listen(4000, function() {
    let port = server.address().port;
    console.log("Servidor iniciado em http://localhost:%s", port);
});

app.get('/movies/sp', cors(), (req, res, next) => {
  const options = {
    url: 'https://api-content.ingresso.com/v0/templates/highlights/1/partnership/home',
    headers: {
        'User-Agent': 'request',
        method: 'GET',
        origin: "https://api-content.ingresso.com",
        preflightContinue: false,
        optionsSuccessStatus: 200
        }
    };
  
    function callback(error, response, body) {
        if (!error && response.statusCode == 200) {
            const info = JSON.parse(body);
            res.send(info);
        }
    }
    request(options, callback);
});

app.get('/movies/rj', cors(), (req, res, next) => {
    const options = {
      url: 'https://api-content.ingresso.com/v0/templates/highlights/2/partnership/home',
      headers: {
          'User-Agent': 'request',
          method: 'GET',
          origin: "https://api-content.ingresso.com",
          preflightContinue: false,
          optionsSuccessStatus: 200
          }
      };
    
      function callback(error, response, body) {
          if (!error && response.statusCode == 200) {
              const info = JSON.parse(body);
              res.send(info);
          }
      }
      request(options, callback);
  });
