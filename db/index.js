const { Pool, Client } = require('pg');
var connectionStr = 'postgres://lindseyotsuki@127.0.0.1:5432/homeshare'
const db = new Client(connectionStr);

db.connect();





module.exports = db;






// const faker = require('faker');
// const fs = require('fs');


// var index = 0;
// let writeStream = fs.createWriteStream('text.csv');

// (function createData() {
//   index++;
//   let id = index;
//   let guest = faker.random.number({min: 1, max: 8});
//   let price = faker.random.number({min: 50, max: 300});
//   let review = faker.random.number({min: 20, max: 150});
//   let rating = faker.random.number({min: 1, max: 5});

//   if (index > 10000000) {
//     return writeStream.end();
//   }
//   var ableToWrite = writeStream.write(`${id},${guest},${price},${review},${rating}\n`);
//   if (!ableToWrite) {
//     writeStream.once('drain', createData);
//   } else {
//     createData();
//   }
// })();





