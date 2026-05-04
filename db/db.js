const mongoose = require('mongoose');

let isConnected = false;

async function dbConnect() {
    try {

        if (isConnected) {
            console.log("Already connected to the database");
            return;
        }

        const db = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        isConnected = db.connections[0].readyState;

        console.log("Database connected");
    } catch (error) {
        console.log(error);
    }
}

module.exports = dbConnect;