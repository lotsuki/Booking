const { Pool, Client } = require('pg');
const faker = require('faker');
const format = require('pg-format');
//const json2csv = require('json2csv').parse;
const Json2csvParser = require('json2csv').Parser;
const fs = require('fs');


// const db = new Client({ database: 'homeshare' });
// const text = 'INSERT INTO listings(host_id, max_guests, price_per_night, review_count, rating) VALUES($1, $2, $3, $4, $5)'
// const values = [3457, 4, 45.89, 47, 4]

// db.connect()

// db.query(text, values, (err, res) => {
//   if (err) { console.log('err', err) }
//     else { console.log(res.rows[0]) }
//   db.end()
// })

//const db = new Pool({ database: 'homeshare' });
const rooms = [];
for (let i = 6; i < 10; i++) {
  rooms.push(
    {
      "id": i,
      "host_id": faker.random.number({min: 1000, max: 5000}),
      "max_guests": faker.random.number({min: 1, max: 8}),
      "price_per_night": faker.random.number({min: 50, max: 300}),
      "review_count": faker.random.number({min: 20, max: 150}),
      "rating": faker.random.number({min: 1, max: 5}),

    }
  );
}
//const stringified = JSON.stringify(rooms)

// const query = format('INSERT INTO listings(host_id, max_guests, price_per_night, review_count, rating) VALUES %L returning id', room);

const fields = ["id","host_id", "max_guests", "price_per_night", "review_count", "rating"]

//const opts = { fields };

const json2csvParser = new Json2csvParser({ fields });
const csv = json2csvParser.parse(rooms);

console.log(csv);

// try {
//   const csv = json2csv(stringified, opts);
//   console.log(csv);
// } catch (err) {
//   console.error(err);
// }

// var csv = JSONtoCSV(stringified, { fields: ["host_id", "max_guests", "price_per_night", "review_count", "rating" ]});
fs.writeFileSync("./seeders/text.csv", csv);






// const db = new Client({ database: 'homeshare' });
// db.connect()
// console.log(rooms)
// db.query(query, rooms, (err, res) => {
//   if (err) { console.log('err', err) }
//     else { console.log(res.rows[0]) }
//   db.end()
// })

// (async () => {
//   var client = new Client({ database: 'homeshare' });
//   var db = await client.connect();
//   try {
//     let { rows } = await client.query(query, rooms);
//     console.log(rows);
//   } catch (e) {
//     console.log(e)
//   } finally {
//     client.end();
//   }
// })().catch(e => console.error(e.message, e.stack))

//populateTable();



// db.on('connect', () => {
//   console.log('Connected to PostgreSQL')
// });


// db.connect((err, client, done) => {
//   if (err) throw err
//   db.query(text, rooms, (err, res) => {
//     done()

//     if (err) {
//       console.log(err.stack)
//     } else {
//       console.log(res.rows[0])
//     }
//   })
// })


// let users = [['test@example.com', 'Fred'], ['test2@example.com', 'Lynda']];
// let query1 = format('INSERT INTO users (email, name) VALUES %L returning id', users);

// async function run() {
//   let client;
//   try {
//     client = new pg.Client({
//       connectionString: 'postgresql://localhost/node_example'
//     });
//     await client.connect();
//     let {rows} = await client.query(query1);
//     console.log(rows);
//   } catch (e) {
//     console.error(e);
//   } finally {
//     client.end();
//   }
// }

// run();



// {
//   host_id: faker.random.number({min: 1000, max: 5000}),
//   max_guests: faker.random.number({min: 1, max: 8}),
//   price_per_night: faker.commerce.price(50, 300),
//   review_count: faker.random.number({min: 20, max: 150}),
//   rating: Nember(faker.finance.amount(1, 5, 1))

// }

// 'use strict';

// const pg = require('pg');
// const format = require('pg-format');





// const config = {
//   host: process.env.RDS_HOSTNAME || 'localhost',
//   database: process.env.RDS_DB_NAME || 'airjld',
//   user: process.env.RDS_USERNAME || 'root',
//   password: process.env.RDS_PASSWORD || 'password',
//   port: process.env.RDS_PORT,
// };



// module.exports = new Sequelize('homeshare', 'root', "''", {
//   host: 'localhost',
//   dialect: 'mysql',
//   operatorsAliases: false,
//   logging: false,

//   pool: {
//     max: 5,
//     min: 0,
//     acquire: 30000,
//     idle: 10000,
//   },
// });

//module.exports = new Sequelize('homeshare', 'root', '""');



// var User = db.define('User', {
//   username: Sequelize.STRING
// });

// var Message = db.define('Message', {
//   userid: Sequelize.INTEGER,
//   text: Sequelize.STRING,
//   roomname: Sequelize.STRING
// });

// /* Sequelize comes with built in support for promises
//  * making it easy to chain asynchronous operations together */
// User.sync()
//   .then(function() {
//     // Now instantiate an object and save it:
//     return User.create({username: 'Jean Valjean'});
//   })
//   .then(function() {
//     // Retrieve objects from the database:
//     return User.findAll({ where: {username: 'Jean Valjean'} });
//   })
//   .then(function(users) {
//     users.forEach(function(user) {
//       console.log(user.username + ' exists');
//     });
//     db.close();
//   })
//   .catch(function(err) {
//     // Handle any error in the chain
//     console.error(err);
//     db.close();
//   });
