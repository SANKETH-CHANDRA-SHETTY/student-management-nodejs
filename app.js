const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const mysql = require("mysql");

require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Parsing middleware
// Parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: true })); // New

// Parse application/json
// app.use(bodyParser.json());
app.use(express.json()); // New

// Static Files
app.use(express.static("public"));

// Templating Engine
app.engine("hbs", exphbs({ extname: ".hbs" }));
app.set("view engine", "hbs");

// Connection Pool
// You don't need the connection here as we have it in userController

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "sanketh", // update if you have a MySQL password
  database: "student_management", // or whatever DB name you used in phpMyAdmin
});

const routes = require("./server/routes/user");
app.use("/", routes);
