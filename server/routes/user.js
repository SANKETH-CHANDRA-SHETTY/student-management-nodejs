const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const db = require("../../config/connection");
const mysql = require("mysql");

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "sanketh", // update if you have a MySQL password
  database: "student_management", // or whatever DB name you used in phpMyAdmin
});

// Routes

router.get("/", userController.view);
router.post("/", userController.find);
router.post("/result", userController.finds);

router.get("/result", userController.views);
router.get("/adduser", userController.form);
router.post("/adduser", userController.create);
router.get("/addresult", userController.forms);
router.post("/addresult", userController.creates);
router.get("/edituser/:id", userController.edit);
router.post("/edituser/:id", userController.update);
router.get("/viewuser/:id", userController.viewall);
router.get("/viewresult/:id", userController.viewalls);
router.get("/:id", userController.delete);

module.exports = router;
