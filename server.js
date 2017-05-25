const express = require('express');
const app = express();

app.listen(3000, function() {
  console.log('Listening');
});

app.use(express.static('public'));

app.get('/api', function(req, res) {
  res.send('Server');
});

app.get('/hello', function(newErr, req, res) {
  newErr.status = 404;
});
// app.use(function(req,res){
//   console.error(err);
// });
