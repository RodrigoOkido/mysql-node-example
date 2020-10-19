const MySQL = require('mysql');
const Express = require('express');
const BodyParser = require('body-parser');

// Instantiate express
var app = Express();

// Use ejs as default engine
app.set("view engine", "ejs");
app.use(BodyParser.urlencoded({extended: true}));
app.use(Express.static(__dirname + "/public"));

// Connect to MySQL localhost.
var connection = MySQL.createConnection({
  host     : 'localhost',
  user     : 'root',
  database : 'fake_users',
  password : 'pwd'
});

app.get("/", function(req, res){

    res.render("home");

});


// List all users informations from the database
app.get("/listAll", function(req, res){
    var q = "SELECT * FROM users";
    let usersData = []
    connection.query(q, function(err, results){
        if(err) throw err;
        
        for (i = 0 ; i < results.length ; i++) {
            let name = results[i].name;
            let email = results[i].email;
            let city = results[i].city;
            let created_at = results[i].created_at;
            usersData.push({name, email, city, created_at})
        }
        res.render("listUsers", {usersData: usersData})
    });
});

app.get("/listGmail", function(req, res){
    var q = "SELECT * FROM users where email like '%gmail%'";
    let usersData = []
    connection.query(q, function(err, results){
        if(err) throw err;
        
        for (i = 0 ; i < results.length ; i++) {
            let name = results[i].name;
            let email = results[i].email;
            let city = results[i].city;
            let created_at = results[i].created_at;
            usersData.push({name, email, city, created_at})
        }
        res.render("listUsers", {usersData: usersData})
    });
});

app.get("/listYahoo", function(req, res){
    var q = "SELECT * FROM users where email like '%yahoo%'";
    let usersData = []
    connection.query(q, function(err, results){
        if(err) throw err;
        
        for (i = 0 ; i < results.length ; i++) {
            let name = results[i].name;
            let email = results[i].email;
            let city = results[i].city;
            let created_at = results[i].created_at;
            usersData.push({name, email, city, created_at})
        }
        res.render("listUsers", {usersData: usersData})
    });
});

app.get("/listHotmail", function(req, res){
    var q = "SELECT * FROM users where email like '%hotmail%'";
    let usersData = []
    connection.query(q, function(err, results){
        if(err) throw err;
        
        for (i = 0 ; i < results.length ; i++) {
            let name = results[i].name;
            let email = results[i].email;
            let city = results[i].city;
            let created_at = results[i].created_at;
            usersData.push({name, email, city, created_at})
        }
        res.render("listUsers", {usersData: usersData})
    });
});

app.listen(3000, function(){
    console.log("Server running on 3000!");
});