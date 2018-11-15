const express = require('express');
const path = require('path');
//const db = require('../db/controllers/index');
const bodyParser = require("body-parser");
const { Pool, Client } = require('pg');
const db = new Pool({ database: 'homeshare' });

const app = express();

app.use(express.static(path.join(__dirname, '..', '/public')));
app.use(bodyParser.json());

app.get('rooms/:listingId', (req, res) => {
  db.connect((err, client, done) => {
    if (err) throw err
    db.query(text, values, (err, res) => {
      done()

      if (err) {
        console.log(err.stack)
      } else {
        console.log(res.rows[0])
      }
    })
  })
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

// app.post('/booking', (req, res) => {
//   console.log('no')
//   db.booking.set(req.body)
//     .then(() => { res.send('Booking successful. Enjoy!').end(); })
//     .catch(() => { res.status(500).send('Could not create booking. Please try again').end(); });
// });

// api.put()

// api.delete()






module.exports = app;
