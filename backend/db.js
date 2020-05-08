/** Database connection for Microblog. */

const { Client } = require("pg");
const { DB_URI } = require('./config');

const client = new Client(DB_URI);

// const client = new Client(process.env.DATABASE_URL || "postgresql:///microblog");

client.connect();

module.exports = client;
