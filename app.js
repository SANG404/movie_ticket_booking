const express = require("express");
const path = require("path");
const app = express();
const mongooseConnect = require("./utils/database");
const bodyParser = require("body-parser");
const user = require("./routes/user");

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));

app.use(user);

// Define a basic route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

mongooseConnect((client) => {
  //console.log(client);
  app.listen(3000);
});
