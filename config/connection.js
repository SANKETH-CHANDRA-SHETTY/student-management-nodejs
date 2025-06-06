const mysql = require("mysql");
require("dotenv").config();

/*const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});*/

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "sanketh",
  database: "student_management",
});

db.connect((err) => {
  if (err) {
    console.error("DB connection error:", err);
  } else {
    console.log("Connected to MySQL cloud DB!");
  }
});

module.exports = db;
