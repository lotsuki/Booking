//require('newrelic');
const express = require('express');
const path = require('path');
const bodyParser = require("body-parser");
const db = require('../db/index.js');
const port = process.env.PORT || 3002;

const app = express();

app.use(express.static(path.join(__dirname, '..', '/public')));
app.use(bodyParser.json());


app.get('/rooms/:listingId', (req, res) => {
  const id = req.params.listingId;
   db.query(`SELECT * FROM listings WHERE id=${id}`, (err, result) => {
      if (err) {
        res.status(500).send('Could not fetch listing');
      } else {
        res.send(result.rows[0]);
      }
  })
});

var count = 0;

app.post('/booking', (req, res) => {
  count++;

  const {
    listing_id,
    customer_name,
    start_date,
    end_date,
    total_days,
    total_price,
    booking_date
  } = req.body;

  db.query(`INSERT INTO bookings(id, listing_id, customer_name, start_date, end_date, total_days, total_price, booking_date) VALUES ('${count}', '${listing_id}', '${customer_name}', '${start_date}', '${end_date}', '${total_days}', '${total_price}', '${booking_date}')`, (err, result) => {
      if (err) { console.log('Could not create booking', err) }
      else { console.log('Booking was successful') }
  });
});


// app.get('/users/:userId', (req, res) => {
//   db.user.get(req.params.userId)
//     .then((data) => {
//       if (data) {
//         res.send(data.name).end();
//       } else {
//         res.send('User not found').end();
//       }
//     })
//     .catch((err) => { throw err; });
// });

// app.get('/customers/:customerId', (req, res) => {
//   db.customer.get(req.params.customerId)
//     .then((data) => {
//       if (data) {
//         res.send(data.name).end();
//       } else {
//         res.send('Customer not found').end();
//       }
//     })
//     .catch((err) => { throw err; });
// });


// app.get('/room/:listingId', (req, res) => {
//   console.log('hey')
//   res.sendFile(path.join(__dirname, '../public/index.html'));
// });

// app.get('rooms/:listingId', (req, res) => {
//     console.log('ho')
//   db.listing.get(req.params.listingId)
//     .then((data) => {
//       if (data) {
//         res.send(data).end();
//       } else {
//         res.status(404).send('No listing found').end();
//       }
//     })
//     .catch((err) => {
//       console.error('Error: GET Req', err);
//       res.status(500).send(`Response Error getting listing ${req.params.listingId}`).end();
//     });
// });


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
