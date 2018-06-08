# api2

## Login
* PATH: /api/login
* METHOD: POST
* Request body
<pre>
{
  "username": "USER",
  "password": "PASSWORD"
}
</pre>
* Response
<pre>
{
  "token": "V8dPwzyWJUMQtdp2LCEWZEiUCpjuKKQj" 
}
</pre>
* Request Sample
<pre>
$ curl -X POST -vvv -d '{"username": "USER","password": "PASSWORD"}' http://localhost:8888/api/login
</pre>

## Item List
* PATH: /api/item
* METHOD: GET
* Response
<pre>
[
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
]
</pre>
* Request Sample
<pre>
$ curl -X GET -vvv  http://localhost:8888/api/item
</pre>

## item detail
* PATH: /api/item/{id}
* METHOD: POST
* Response
<pre>
{
     "id": 1,
     "name": "春の新作その１",
     "price": 600,
     "zaiko": 0,
     "size": [ "S", "M", "L" ],
     "description": "おすすめの春の新作です"
}
</pre>
* Request Sample
<pre>
$ curl -X GET -vvv  http://localhost:8888/api/item/1
</pre>
