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
