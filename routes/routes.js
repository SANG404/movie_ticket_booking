// const express = require("express");
// const path = require("path");
// const router = express.Router();
// const registrationController = require("../controllers/usercontroller");

// const views = path.join(__dirname, "../", "views");

// router.get("/", (req, res) => {
//   res.sendFile(path.join(views, "home.html"));
// });

// router.get("/login", (req, res) => {
//   res.sendFile(path.join(views, "login.html"));
// });

// router.get("/register", (req, res) => {
//   res.sendFile(path.join(views, "register.html"));
// });

// router.get("/user-home", (req, res) => {
//   res.sendFile(path.join(views, "home.html"));
// });

// router.get("/admin-home", (req, res) => {
//   res.sendFile(path.join(views, "home.html"));
// });

// router.post("/register", registrationController.registration);

// router.post("/login", async (req, res) => {
//   const data = req.body;
//   const user = await Users.findOne({ username: data.username });

//   if (!user) {
//     res.redirect("/login");
//     return;
//   }
//   if (user.password === data.password) {
//     if (user.role === "admin") {
//       res.redirect("/admin-home");
//     } else {
//       res.redirect("/user-home");
//     }
//   } else {
//     res.send("Wrong password!");
//   }
// });

// module.exports = router;
