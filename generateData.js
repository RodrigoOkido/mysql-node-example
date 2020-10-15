// File to generate and insert fake data to database.

import MySQL from 'mysql';
import Faker from 'faker';


// Connection to database.
let connection = MySQL.createConnection({
  host     : 'localhost',
  user     : 'root',
  database : 'fake_users',
  password : 'pwd'
});
 

// Generate the fake data to insert to fake data array.
let fake_data = [];
for(let i = 0; i < 3000; i++){
    fake_data.push([
        Faker.internet.userName(),
        Faker.internet.email(),
        Faker.address.city(),
        Faker.date.past()
    ]);
}
 

// Insert all fake generated data to the 'users' table. 
// ** This table needs to be created at mySQL before you execute this.
let q = 'INSERT INTO users (email, created_at) VALUES ?';
 
connection.query(q, [data], function(err, result) {
  console.log(err);
  console.log(result);
});
 

connection.end();