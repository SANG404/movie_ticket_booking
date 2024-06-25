const express = require("express");
const path = require("path");
const router = express.Router();
const userController = require("../controllers/usercontroller");

const views = path.join(__dirname, "../", "views");

// Home view
router.get("/", (req, res) => {
  res.sendFile(path.join(views, "home.html"));
});

// Login view
router.get("/login", (req, res) => {
  res.sendFile(path.join(views, "login.html"));
});

// Register view
router.get("/register", (req, res) => {
  res.sendFile(path.join(views, "register.html"));
});

//user home view
router.get("/user_home", (req, res) => {
  res.sendFile(path.join(views, "user_home.html"));
});

//admn home view
router.get("/admin-home", (req, res) => {
  res.sendFile(path.join(views, "home.html"));
});

// Profile view
router.get("/user/profile", (req, res) => {
  res.sendFile(path.join(views, "profile.html"));
});

//Registration route
router.post("/register", userController.postRegistration);

//Login route
router.post("/login", userController.postLogin);

module.exports = router;
