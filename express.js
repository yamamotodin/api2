var express = require('express'),
  bodyParser = require('body-parser')

var app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.post('/api/login', function(req, res, next) {
  let result = {};
  result.token = "8riWnQKDA9ZnRrcaMXmZ5UJkL5dVPhbx";
  res.send(result);
})

app.get('/api/item', function(req, res, next) {
   let result = [
   {
     "id": 1,
     "name": "春の新作その１",
     "price": 560,
     "zaiko": 5
   },
   {
     "id": 2,
     "name": "春の新作その２",
     "price": 600,
     "zaiko": 0
   }
    ];
  res.send(result);
})

app.get('/api/item/:id', function(req, res, next) {
   let result ={
                    "id": 1,
                    "name": "春の新作その１",
                    "price": 600,
                    "zaiko": 0,
                    "size": [ "S", "M", "L" ],
                    "description": "おすすめの春の新作です"
               };

  res.send(result);
})

app.listen(8880, function(){
  console.log('Express server listening on port 8880')
})
