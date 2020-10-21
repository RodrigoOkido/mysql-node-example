const MySQL = require('mysql');
const Express = require('express');
const BodyParser = require('body-parser');


// Instantiate express
let app = Express();

// Use ejs as default engine
app.set("view engine", "ejs");
app.use(BodyParser.urlencoded({extended: true}));
app.use(Express.static(__dirname + "/public"));

// Connect to MySQL localhost.
let connection = MySQL.createConnection({
  host     : 'localhost',
  user     : 'root',
  database : 'fake_users',
  password : 'pwd'
});


/**
 * Function to define the correct query to database based on filter.
 * 
 * @param {*} name Name input field.
 * @param {*} email Email input field.
 * @param {*} city City input field.
 */
const queryFilter = function (name, email, city) {
    let query;
    if (name) {
        query = "SELECT * FROM users where name LIKE '%" + name + "%'";
    } else if (email){
        query = "SELECT * FROM users where email = '" + email+ "'";
    } else if (city) {
        query = "SELECT * FROM users where city LIKE '%" + city + "%'";
    } else {
        query = "";
    }

    return query;
}


// Home Page
app.get("/", function(req, res){
    let usersData = [];
    res.render("home", {usersData: usersData});
});


// List all users informations from the database
app.get("/listAll", function(req, res){
    let q = "SELECT * FROM users";
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
        res.render("home", {usersData: usersData})
    });
});


/// List all users using gmail as email
app.get("/listGmail", function(req, res){
    let q = "SELECT * FROM users where email like '%gmail%'";
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

        res.render("home", {usersData: usersData})
    });
});


/// List all users using yahoo as email
app.get("/listYahoo", function(req, res){
    let q = "SELECT * FROM users where email like '%yahoo%'";
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
        res.render("home", {usersData: usersData})
    });
});


/// List all users using hotmail as email
app.get("/listHotmail", function(req, res){
    let q = "SELECT * FROM users where email like '%hotmail%'";
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
        res.render("home", {usersData: usersData})
    });
});


// List users using filters.
app.get("/filterBy", function(req,res) {

    // Taking all the filters requisitions
    let inputNameFilter = req.query.nameFilter;
    let inputEmailFilter = req.query.emailFilter;
    let inputCityFilter = req.query.cityFilter;

    let q = queryFilter(inputNameFilter, inputEmailFilter, inputCityFilter);
    let usersData = []

    if (!q) {
        console.log("filter not applied")
    } else {
        connection.query(q, function(err, results){
            if(err) throw err;
            
            for (i = 0 ; i < results.length ; i++) {
                let name = results[i].name;
                let email = results[i].email;
                let city = results[i].city;
                let created_at = results[i].created_at;
                usersData.push({name, email, city, created_at})
            }
            res.render("home", {usersData: usersData})
        });
    }

});


app.listen(3000, function(){
    console.log("Server running on port 3000!");
});