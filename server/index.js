const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const app = express();
const port = 5000;
const config = require("./config/key.js");

// mongodb+srv://evenGom:o8o3j65S3N8AvdWT@cluster0.otsgj.mongodb.net/?retryWrites=true&w=majority
// body-parsor

app.use(express.static(path.join(__dirname, "../client/build")));
app.use("/image", express.static("./image"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/post", require("./Router/post.js"));
app.use("/api/user", require("./Router/user.js"));
app.use("/api/reple", require("./Router/reple.js"));

app.listen(port, () => {
  mongoose
    .connect(config.mongoURI)
    .then(() => {
      console.log(`Example app listening on port ${port}`);
      console.log("Connectiong MongoDB...");
    })
    .catch((err) => {
      console.log(`${err}`);
    });
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});
