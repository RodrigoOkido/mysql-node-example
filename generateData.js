// File to generate and insert fake data to database.
const Mysql = require('mysql');
const Faker = require('faker');


// Connection to database.
let connection = Mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  database : 'fake_users',
  password : 'pwd'
});
 

// Generate the fake data to insert to fake data array.
let fake_data = [];
for(let i = 0; i < 2000; i++){
    fake_data.push([
        Faker.internet.userName(),
        Faker.internet.email(),
        Faker.address.city(),
        Faker.date.past()
    ]);
}
 

// Insert all fake generated data to the 'users' table. 
// ** This table needs to be created at mySQL before you execute this.
let q = 'INSERT INTO users (name, email, city, created_at) VALUES ?';
 
connection.query(q, [fake_data], function(err, result) {
  console.log(err);
  console.log(result);
});
 

connection.end();