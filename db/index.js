const { Pool, Client } = require('pg');
const faker = require('faker');
const fs = require('fs');


var index = 0;
let writeStream = fs.createWriteStream('./seeders/text.csv');

function populateFile() {
  index++;
  let id = index;
  let host = faker.random.number({min: 1000, max: 5000});
  let guest = faker.random.number({min: 1, max: 8});
  let price = faker.random.number({min: 50, max: 300});
  let review = faker.random.number({min: 20, max: 150});
  let rating = faker.random.number({min: 1, max: 5});

  if (index > 10000000) {
    return writeStream.end();
  }
  var ableToWrite = writeStream.write(`${id},${host},${guest},${price},${review},${rating}\n`);
  if (!ableToWrite) {
    writeStream.once('drain', populateFile);
  } else {
    populateFile();
  }
};

populateFile();

// const pool = new Pool({ database: 'homeshare' });

// pool.connect(function(err, client, done) {
//   var stream = client.query(copyFrom("\copy listings from './seeders/text.csv' with (format csv)"));
//   var fileStream = fs.createReadStream('./seeders/text.csv')
//   // fileStream.on('error', done);
//   // stream.on('error', done);
//   stream.on('end', done);
//   fileStream.pipe(stream);
// });



//   pool.connect().then(client=>{
//     let done = () => {
//       client.release();
//     }
//     var stream = client.query("\copy listings from './db/seeders/text.csv' with (format csv)");
//     var rs = new Readable;
//     rs._read = function () {
//       if (currentIndex === 10) {
//         rs.push(null);
//       } else {
//         rs.push(currentIndex + '\t' + faker.random.number({min: 1000, max: 5000}) + '\t' + faker.random.number({min: 1, max: 8}) + '\t' + faker.random.number({min: 50, max: 300}) + '\t' + faker.random.number({min: 20, max: 150}) + '\t' + faker.random.number({min: 1, max: 5}) + '\n');
//         currentIndex++;
//       }
//     };
//     let onError = strErr => {
//       console.error('Something went wrong:', strErr);
//       done();
//     };
//     rs.on('error', onError);
//     stream.on('error', onError);
//     stream.on('end',done);
//     rs.pipe(stream);
//     process.stdout.pipe(stream);
//   });





//   const copyFrom = require('pg-copy-streams').from;
// const Readable = require('stream').Readable;
// const { Pool,Client } = require('pg');
// const fs = require('fs');
// const path = require('path');
// const datasourcesConfigFilePath = path.join(__dirname,'..','..','server','datasources.json');
// const datasources = JSON.parse(fs.readFileSync(datasourcesConfigFilePath, 'utf8'));

// const pool = new Pool({
//     user: datasources.PG.user,
//     host: datasources.PG.host,
//     database: datasources.PG.database,
//     password: datasources.PG.password,
//     port: datasources.PG.port,
// });

// export const bulkInsert = (employees) => {
//   pool.connect().then(client=>{
//     let done = () => {
//       client.release();
//     }
//     var stream = client.query(copyFrom('COPY employee (name,age,salary) FROM STDIN'));
//     var rs = new Readable;
//     let currentIndex = 0;
//     rs._read = function () {
//       if (currentIndex === employees.length) {
//         rs.push(null);
//       } else {
//         let employee = employees[currentIndex];
//         rs.push(employee.name + '\t' + employee.age + '\t' + employee.salary + '\n');
//         currentIndex = currentIndex+1;
//       }
//     };
//     let onError = strErr => {
//       console.error('Something went wrong:', strErr);
//       done();
//     };
//     rs.on('error', onError);
//     stream.on('error', onError);
//     stream.on('end',done);
//     rs.pipe(stream);
//   });
// }









