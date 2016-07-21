/*eslint no-console:0 */
'use strict';
const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

app.use(express.static('public'));

app.get('/ads', function(req, res) {
  fs.readFile(path.resolve(__dirname, './data/ads.json'), 'utf-8', (err, file) => {
    res.json(JSON.parse(file));

  });
});

app.get('/ads_metrics', function(req, res) {
  fs.readFile(path.resolve(__dirname, './data/ads_metrics.json'), 'utf-8', (err, file) => {
    res.json(JSON.parse(file));
  });
});

app.get('/*', (req, res) => {
  res.sendFile('index.html')
});

var port = process.env.PORT || 3000;
  
app.listen( port, function() {
  console.log('listening on port ' + port);
});