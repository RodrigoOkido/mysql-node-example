var mysql = require('mysql');
var faker = require('faker');
var express = require('express');
var bodyParser  = require("body-parser");
var app = express();

// Connection to database.
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  database : 'fake_users',
  password: 'pwd'
});
 

// Generate the fake data to insert to database.
var fake_data = [];
for(var i = 0; i < 3000; i++){
    fake_data.push([
        faker.internet.email(),
        faker.date.past()
    ]);
}
 
 
var q = 'INSERT INTO users (email, created_at) VALUES ?';
 
connection.query(q, [data], function(err, result) {
  console.log(err);
  console.log(result);
});
 

connection.end();