var express = require('express')
var bodyParser = require('body-parser')
var app = express()
const mysql = require('mysql');
const config = {
  user: 'root',
  password: 'password',
  host: 'localhost',
  database: 'Project2',
  port: '8080',
  connectionLimit: 10
}
const pool = mysql.createPool(config);
/*const fs = require('fs');
const promisePool = pool.promise();*/




app.set('port', (process.env.PORT || 5000))
//app.use(express.static(__dirname + '/public'))m
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "authorization, Origin, X-Requested-With, Content-Type, Accept");


    next();
})
app.use(bodyParser.json())

app.post('/checkLogin', async function(request, response) {
  try {
    console.log(request.body);
    var email= request.body.email;
    var password = request.body.password;
    pool.query('select * from UserDetails where Email=(?) AND Password=(?)',[email,password], function (error, results, fields) {
      if (error) throw error;
      if(results.length>0){
        response.send(true)
      }else{
        response.send(false)
      }
    });
    
    
} catch (err) {
  console.log('failure');
  console.log(err);
   response.send(err)
   
}
})

app.post('/register', async function(request, response) {
  try {
    console.log(request.body);
    var email= request.body.email;
    var password = request.body.password;
    pool.query('insert into UserDetails values(?,?)',[email,password], function (error, results, fields) {
      if (error) throw error;
      response.send(true);
    });
    
    
} catch (err) {
  console.log('failure');
  console.log(err);
   response.send(false);
   
}
})
app.post('/createAccount', async function(request, response) {
  try {
    console.log(request.body);
    var email= request.body.email;
    var fullName = request.body.fullName;
    var dob = request.body.dob;
    var streetNo = request.body.streetNo;
    var streetName= request.body.streetName;
    var city=request.body.city;
    var province=request.body.province;
    var country=request.body.country;
    var postalCode=request.body.postalCode;

    pool.query('insert into Registration values(?,?,?,?,?,?,?,?,?)',[email,fullName,dob,streetNo,streetName,city,province,country,postalCode], function (error, results, fields) {
      if (error) throw error;
      response.send(true);
    });
    
    
} catch (err) {
  console.log('failure');
  console.log(err);
   response.send(false);
   
}
})

app.post('/getUserReviews', async function(request, response) {
  try {
    var name= request.body.name;
    pool.query('select * from MovieReviews where moviename=(?)',[name], function (error, results, fields) {
      if (error) throw error;
      response.send(results);
    });
} catch (err) {
  console.log('failure');
  console.log(err);
   response.send(false);
}
})

app.post('/updateReview', async function(request, response) {
  try {
    var name= request.body.name;
    var review = request.body.review
    pool.query('insert into MovieReviews values(?,?)',[name,review], function (error, results, fields) {
      if (error) throw error;
      response.send(results);
    });
} catch (err) {
  console.log('failure');
  console.log(err);
   response.send(false);
}
})

app.post('/getTvUserReviews', async function(request, response) {
  try {
    var name= request.body.name;
    pool.query('select * from TvShowReviews where tvshowname=(?)',[name], function (error, results, fields) {
      if (error) throw error;
      response.send(results);
    });
} catch (err) {
  console.log('failure');
  console.log(err);
   response.send(false);
}
})

app.post('/updateTvReview', async function(request, response) {
  try {
    var name= request.body.name;
    var review = request.body.review
    pool.query('insert into TvShowReviews values(?,?)',[name,review], function (error, results, fields) {
      if (error) throw error;
      response.send(results);
    });
} catch (err) {
  console.log('failure');
  console.log(err);
   response.send(false);
}
})

app.post('/getGameUserReviews', async function(request, response) {
  try {
    var name= request.body.name;
    pool.query('select * from GameReviews where gamename=(?)',[name], function (error, results, fields) {
      if (error) throw error;
      response.send(results);
    });
} catch (err) {
  console.log('failure');
  console.log(err);
   response.send(false);
}
})

app.post('/updateGameReview', async function(request, response) {
  try {
    var name= request.body.name;
    var review = request.body.review
    pool.query('insert into GameReviews values(?,?)',[name,review], function (error, results, fields) {
      if (error) throw error;
      response.send(results);
    });
} catch (err) {
  console.log('failure');
  console.log(err);
   response.send(false);
}
})



app.post('/login',  function (req, res) {
  res.send('welcome, ' + req.body.username)
})

app.post('/register', function (req, res) {
  res.send('welcome, ' + req.body.username)
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
