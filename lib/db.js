// const path = require("path");
// const PATH = path.resolve(__dirname, "../.env");
// require("dotenv").config({ path: PATH });
// console.log(process.env);

let dbParams = {};
if (process.env.DATABASE_URL) {
  dbParams.connectionString = process.env.DATABASE_URL;
  dbParams.ssl = { rejectUnauthorized: false };
} else {
  dbParams = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
  };
}

module.exports = dbParams;


