const faker = require('faker');
const fs = require('fs');


var index = 0;
let writeStream = fs.createWriteStream('text.csv');

(function createData() {
  index++;
  let id = index;
  let guest = faker.random.number({min: 1, max: 8});
  let price = faker.random.number({min: 50, max: 300});
  let review = faker.random.number({min: 20, max: 150});
  let rating = faker.random.number({min: 1, max: 5});

  if (index > 10000000) {
    return writeStream.end();
  }
  var ableToWrite = writeStream.write(`${id},${guest},${price},${review},${rating}\n`);
  if (!ableToWrite) {
    writeStream.once('drain', createData);
  } else {
    createData();
  }
})();




// const {
//   User,
//   Listing,
//   Customer,
//   Booking,
// } = require('../models/index.js');
// const seedData = require('../seeders/data.js');
// const db = require('../index.js');

// const genAmountOf = {
//   users: 200,
//   customers: 200,
//   listings: 1000,
//   bookings: 700,
// };

// const insertSampleData = () => {
//   db.query(`CREATE DATABASE IF NOT EXISTS homeshare`)
//     .then(() => db.sync({ force: true }))
//     .then(() => User.bulkCreate(seedData.users))
//     .then(() => Listing.bulkCreate(seedData.listings))
//     .then(() => Customer.bulkCreate(seedData.customers))
//     .then(() => Booking.bulkCreate(seedData.bookings))
//     .then(() => db.close())
//     .catch((err) => {
//       db.close();
//       throw err.parent;
//     });
// };

// seedData.generate.users(genAmountOf.users);
// seedData.generate.customers(genAmountOf.customers);
// seedData.generate.listings(genAmountOf.listings, genAmountOf.users);
// seedData.generate.bookings(genAmountOf.bookings, genAmountOf.listings, genAmountOf.customers);
// insertSampleData();

// module.exports = insertSampleData;
