const faker = require('faker');
const fs = require('fs');

var index = 0;
let writeStream = fs.createWriteStream('text.csv');

(function createData() {
  index++;
  let id = index;
  let host = faker.random.number({min: 1000, max: 5000});
  let guest = faker.random.number({min: 1, max: 8});
  let price = faker.random.number({min: 50, max: 300});
  let review = faker.random.number({min: 20, max: 150});
  let rating = faker.random.number({min: 1, max: 5});

  if (index > 10) {
    return writeStream.end();
  }
  var ableToWrite = writeStream.write(`${id},${host},${guest},${price},${review},${rating}\n`);
  if (!ableToWrite) {
    writeStream.once('drain', createData);
  } else {
    createData();
  }
})();









