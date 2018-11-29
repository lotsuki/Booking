const { Pool, Client } = require('pg');
var connectionStr = 'postgres://lindseyotsuki@127.0.0.1:5432/homeshare'
const db = new Client(connectionStr);

db.connect();


module.exports = db;








