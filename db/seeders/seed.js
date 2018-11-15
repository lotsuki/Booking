




















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
