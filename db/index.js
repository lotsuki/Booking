const { Pool, Client } = require('pg');
var connectionStr = 'postgres://ec2-3-16-108-112.us-east-2.compute.amazonaws.com:5432'
const db = new Client(connectionStr);

db.connect();


module.exports = db;








