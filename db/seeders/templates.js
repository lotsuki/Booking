// const copyFrom = require('pg-copy-streams').from;
// const Readable = require('stream').Readable;
// const { Pool } = require('pg');
// const fs = require('fs');
// const path = require('path');

// const pool = new Pool({ database: 'homeshare' });

// // export const bulkInsert = (employees) => {
// //   pool.connect().then(client=>{
// //     let done = () => {
// //       client.release();
// //     }
// //     var stream = client.query(copyFrom('COPY listings (host_id,max_guests,price_per_night,review_count,rating) FROM STDIN'));
// //     var rs = new Readable;
// //     let currentIndex = 0;
// //     rs._read = function () {
// //       if (currentIndex === employees.length) {
// //         rs.push(null);
// //       } else {
// //         let employee = employees[currentIndex];
// //         rs.push(employee.name + '\t' + employee.age + '\t' + employee.salary + '\n');
// //         currentIndex = currentIndex+1;
// //       }
// //     };
// //     let onError = strErr => {
// //       console.error('Something went wrong:', strErr);
// //       done();
// //     };
// //     rs.on('error', onError);
// //     stream.on('error', onError);
// //     stream.on('end',done);
// //     rs.pipe(stream);
// //   });
// // }

// pool.connect(function(err, client, done) {
//   var stream = client.query(copyFrom('COPY listings FROM STDIN'));
//   var fileStream = fs.createReadStream('./text.csv')
//   //fileStream.on('error', done);
//   if (err) { console.log(err); }
//   else { fileStream.pipe(stream).on('finish', done).on('error', done); }

// });