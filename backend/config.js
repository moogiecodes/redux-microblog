require('dotenv').config();

const SECRET = process.env.SECRET_KEY || 'test';

const PORT = +process.env.PORT || 5000;

console.log(PORT);

let DB_URI;

if (process.env.NODE_ENV === 'test') {
  DB_URI = 'microblog-test';
} else {
  DB_URI = process.env.DATABASE_URL || 'postgresql:///microblog';
}

module.exports = {
  SECRET,
  PORT,
  DB_URI
};