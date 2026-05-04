const express = require('express');
const connectDB = require('./db/db');
const studentRoutes = require("./router/getDetails");
require("dotenv").config();

console.log("ENV CHECK:", process.env.MONGO_URI);

connectDB().catch(err => {
  console.error("DB FAILED:", err);
});

const app = express();

app.use(express.json());
app.use(express.static('.'));

app.use('/api', studentRoutes);

// app.listen(3000, () => {
//   console.log('Server is running on port 3000');
// });

// For testing purposes, we will export the app instead of listening directly
module.exports = app;