const express = require('express');
const connectDB = require('./db/db');
const studentRoutes = require("./router/getDetails")

connectDB();

const app = express();

app.use('/api', studentRoutes);

app.get("/", (req, res) => {
    res.send("hello");
})

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});