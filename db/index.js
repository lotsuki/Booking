const { Pool, Client } = require('pg');
var connectionStr = 'postgres://postgres@ec2-18-216-31-87.us-east-2.compute.amazonaws.com:5432/airjld'

// var connectionStr = 'postgres://lindseyotsuki@127.0.0.1:5432/homeshare'
const db = new Client(connectionStr);

db.connect();


module.exports = db;








