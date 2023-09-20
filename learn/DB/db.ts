const mongoose = require('mongoose');
const MONGODB_URL = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@tutor.rlb2mnq.mongodb.net/`;

const connectToDatabase = async () => {
    try {
        const client = await mongoose.connect(MONGODB_URL);
        console.log("Connected to MongoDB");
        return client; // Возвращаем объект подключения
    } catch (e) {
        console.error("MongoDB Connection Error:", e);
        throw e;
    }
};

module.exports = connectToDatabase;