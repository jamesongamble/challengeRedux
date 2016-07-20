/*eslint no-console:0 */
'use strict';
const express = require('express')
const app = express();

app.use(express.static('public'));

app.get('*', (req, res) => {
  res.sendFile('index.html')
});

var port = process.env.PORT || 3000;
  
app.listen( port, function() {
  console.log('listening on port ' + port);
});