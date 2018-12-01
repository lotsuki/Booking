const { Pool, Client } = require('pg');
var connectionStr = 'postgres://postgres:password@ec2-18-216-31-87.us-east-2.compute.amazonaws.com:5432/airjld'
const db = new Client(connectionStr);

db.connect();


module.exports = db;








