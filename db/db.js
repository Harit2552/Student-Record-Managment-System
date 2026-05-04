const mongoose = require('mongoose');

let isConnected = false;

async function dbConnect() {
    if (isConnected) {
        return;
    }

    try {
        const db = await mongoose.connect(process.env.MONGO_URI);

        isConnected = db.connections[0].readyState === 1;

        console.log("Database connected");
    } catch (error) {
        console.error("DB CONNECTION ERROR:", error.message);
        throw error; // 🔥 important
    }
}

module.exports = dbConnect;