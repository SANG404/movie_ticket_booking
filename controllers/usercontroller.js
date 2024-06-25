const Users = require("../models/users");

//postRegistration functionality
exports.postRegistration = (req, res) => {
  const data = req.body;

  const users = new Users(data);
  users
    .save()
    .then((result) => {
      console.log(result);
      console.log("User registered successfully");
      res.redirect("/login");
    })
    .catch((err) => {
      console.log(err);
    });
};

//postLogin functionality
exports.postLogin = async (req, res) => {
  const data = req.body;
  const user = await Users.findOne({ username: data.username });

  if (!user) {
    res.redirect("/login");
    return;
  }
  if (user.password === data.password) {
    if (user.role === "admin") {
      res.redirect("/admin-home");
    } else {
      res.redirect("/user_home");
    }
  } else {
    res.send("Wrong password!");
  }
};
