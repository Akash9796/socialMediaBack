const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();
const path = require("path");
var cors = require('cors');
app.use(cors())

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({ path: "config/config.env" });
}

//Using Middleware
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cookieParser());

// Importing Routes
const post = require("./routes/postRoute");
const user = require("./routes/userRoute");

//Using Routes
app.use("/api/v1", post);
app.use("/api/v1", user);

// app.use(express.static(path.join(__dirname, "../frontend/build")));

// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
// });

module.exports = app;
