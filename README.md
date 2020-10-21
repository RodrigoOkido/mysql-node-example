# MySQL w/ NodeJS Example 
Simple website developed with nodejs using MySQL as database. The database is all 
fake and its generated using 'faker' package. It requires to be installed locally 
to test this example. 


This is a single page to make searches on a fake database. Its a simple example 
about how you can interact with your database using node.


It use the following npm packages:
- express
- faker
- ejs
- body-parser
- mysql


Used node version: **v10.19**  
Used MySQL version: **v8.0.21 for Linux on x86_64 (MySQL Community Server - GPL)**


## Installation Guide (Local) - Ubuntu(20.04)
To test this example on your local machine, you must have mysql and nodejs installed on 
your machine. This guide was made using Ubuntu 20.04.

To install node:
```
sudo apt-get install nodejs
```


To install MySQL: [here](https://dev.mysql.com/downloads/mysql/)
```
1. Select OS with the respective version you are using on your machine.
2. Download the DEB Bundle.
3. Extract the .tar in a folder at your preference.
4. Open your terminal and enter where you extracted the files and type 'sudo dpkg -i *.deb'.
5. Some errors of dependencies packages can occur during the installation process.
   Enter 'sudo apt-get install -f' in case this happen.
6. During installation process, MySQL will ask you to define a password to access
   your database. Define a password at your preference.
7. Once installation finish, check mysql service with 'sudo service mysql status'.
   If 'active (running)' appear you are good to go. 
8. Run mysql typing 'mysql -u root -p'
9. Enter the password you defined during the installation process.
10. You done! To check if everything is fine, try typing 'show databases;' inside the
    mySQL program (If the program is running, you should see at terminal something like 'mysql> ').
```


Inside MySQL terminal do the following commands:  
  
Create a new database called fake_users.
```
CREATE DATABASE fake_users;
```
Use this created database to manipulate any data on it.
```
USE fake_users;
```
Create a new table called users inside this database.
```
CREATE TABLE users (
    name VARCHAR(60),
    email VARCHAR(60),
    city VARCHAR(60),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```


Once you done this, you can clone this repository (if you haven't yet) and run the following steps at your terminal:

```
1. npm install
2. node generateData
3. node app
4. Open your browser at localhost:3000 
```

You should be able to see a simple webpage with some actions available to you 
interact with the database. 



