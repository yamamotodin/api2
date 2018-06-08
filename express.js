var express = require('express'),
  bodyParser = require('body-parser')

var app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.post('/login', function(req, res, next) {
  let result = {};
  result.token = "8riWnQKDA9ZnRrcaMXmZ5UJkL5dVPhbx";
  res.send(result);
})

app.listen(8888, function(){
  console.log('Express server listening on port 8888')
})
