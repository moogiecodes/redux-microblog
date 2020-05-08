/** Database connection for Microblog. */

const { Client } = require("pg");
const SECRET = process.env.SECRET_KEY || 'test';

const client = new Client(process.env.DATABASE_URL || "postgresql:///microblog");

client.connect();

module.exports = {
  client,
  SECRET
};
