const express = require('express');
const connectDB = require('../db/db');
const studentRoutes = require('../router/getDetails');

require("dotenv").config();

const app = express();

connectDB();

app.use(express.json());

// route
app.use('/api', studentRoutes);

// export instead of listen
module.exports = app;