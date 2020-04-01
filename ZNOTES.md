<!-- To generate a package.json for me -->
npm init -y 

<!-- To add dependencies -->
npm i

<!-- To add express & node modules -->
npm i express

<!-- Index.js -->
create index.js file and add code below
<!-- const server = require('./api/server.js');

const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`\n** Running on port ${port} **\n`)); -->

<!-- API & server.js -->
create api folder
create server.js file with boiler plate code below
<!-- const express = require('express');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
  res.send("It's alive!");
});

module.exports = server; -->

<!-- Package.json Scripts -->
remove test script and replace with server and start
    <!-- "server": "nodemon",
    "start": "node index.js" -->
run in terminal- npm i -D nodemon  

<!-- Run server -->
npm run server

<!-- Add knex and sqlite3 -->
npm add knex sqlite3

<!-- Create knexfile.js -->
knex init

<!-- knexfile cleanup -->
delete staging and production sections
add 
    <!-- useNullAsDefault: true, -->
add code below
  <!-- pool: {
    afterCreate: (conn, done) => {
      conn.run('PRAGMA foreign_keys = ON', done);
    },
  }, -->

<!-- Create users table in migrations folder -->
create data folder and cd into it - so the auto generated migrations folder is in the data folder
<!-- cd into the file didnt work - migrations folder was still created outside the data folder -->

<!-- Update newly created migrations file -->
use the following code below:
    
<!--    exports.up = function(knex) {
    return knex.schema
    .createTable('users', users => {
        users.increment();

        users
        .string('username', 128)
        .notNullable()
        .unique();

        users
        .string('password', 128)
        .notNullable();

        users
        .string('department', 128)
        .notNullable();
    });
    };

    exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('users');
    };  
--> 

<!-- Run migration files and create db file -->
in terminal, run -
    knex migrate:latest

<!-- create and update Users seed file -->
knex seed:make 01-users
change del to truncate
change table name x2 to name required i.e. users
remove id field and create as schema calls for in readme

<!-- create table in sqlite studio and add columns to match schema -->
open db file in sqlite studio
create a table and add the required columns, save

<!-- Run seeds file -->
knex seed:run

<!-- index file update -->
uncomment out .env and install dotenv

<!-- Create dbConfig.js file in data folder -->
copy info that links to knexfile from other projects

<!-- Users -->
create users folder
create users-model.js file
create users-router.js file

<!-- security/tokens -->
npm i bcryptjs
npm i jsonwebtoken

<!-- Auth folder -->
create auth folder 
create auth-router.js file
create restricited-middleware.js file