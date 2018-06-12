
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
//パスを取得
var path = req.url
//「/」で区切って配列化
var pathinfo = path.split('/');
//最後の要素（id）だけ抜き出し
var id = pathinfo.pop();

if( id == 1 ) {
   var result ={
                    "id": 1,
                    "name": "春の新作その１",
                    "price": 600,
                    "zaiko": 0,
                    "size": [ "S", "M", "L" ],
                    "description": "おすすめの春の新作１です"
               };
}
else if( id == 2) {
   var result ={
                    "id": 2,
                    "name": "春の新作その２",
                    "price": 600,
                    "zaiko": 0,
                    "size": [ "S", "M", "L" ],
                    "description": "おすすめの春の新作２です"
               };
}
else  {
   var result ={
                    "id": id,
                    "name": "新商品",
                    "price": 0,
                    "zaiko": 0,
                    "size": [ "S", "M", "L" ],
                    "description": "未定義新商品"
               };
}

  res.send(result);
})

app.listen(8888, function(){
  console.log('Express server listening on ports 8888')
})
