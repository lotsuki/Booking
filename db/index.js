const faker = require('faker');
const fs = require('fs');
const performance = require('perf_hooks').performance;
//var t1 = performance.now()
var index = 0;
let writeStream = fs.createWriteStream('text.csv');


(function createData() {
  index++;
  let id = index;
  let guest = faker.random.number({min: 1, max: 8});
  let price = faker.random.number({min: 50, max: 300});
  let review = faker.random.number({min: 20, max: 150});
  let rating = faker.random.number({min: 1, max: 5});
  //let rating = faker.lorem.paragraph();

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

// var t2 = performance.now();


// return ((t2-t1)/1000).toFixed(3) + ' seconds'











