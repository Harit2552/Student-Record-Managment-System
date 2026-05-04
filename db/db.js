const mongoose = require('mongoose');

let isConnected = false;

async function dbConnect() {
    try {
        const db = await mongoose.connect("mongodb://localhost:27017/students");

        console.log("Database connected");
    } catch (error) {
        console.log(error);
    }
}

module.exports = dbConnect;