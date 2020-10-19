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
  password: 'pwd'
});

app.get("/", function(req, res){
    // Find count of users in DB
    var q = "SELECT COUNT(*) AS count FROM users";
    connection.query(q, function(err, results){
        if(err) throw err;
        res.render("home");
    });
});

app.get("/list", function(req, res){
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

app.listen(3000, function(){
    console.log("Server running on 3000!");
});