const mongoose = require("mongoose");

const mongooseConnect = (callBack) => {
  mongoose
    .connect("mongodb://localhost:27017/myapp")
    .then((client) => {
      console.log("connected");
      callBack(client);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = mongooseConnect;
