import MySQL from 'mysql';
import Express from 'express';
import BodyParser from 'body-parser';

var app = Express();


app.set("view engine", "ejs");
app.use(BodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));

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
        var count = results[0].count; 
        res.render("home", {count: count});
    });
});

app.post("/register", function(req, res){
    var person = {
        email: req.body.email
    };
    connection.query('INSERT INTO users SET ?', person, function(err, result) {
        if (err) throw err;
        res.redirect("/");
    });
});

app.listen(3000, function(){
    console.log("Server running on 3000!");
});