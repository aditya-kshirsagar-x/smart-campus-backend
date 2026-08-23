const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb+srv://adityakshirsagar762060_db_user:aditya123456@cluster0.v6srkc3.mongodb.net/smart-campus?retryWrites=true&w=majority&appName=Cluster0');

        console.log(`MongoDB Connected Successfully: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Database Connection Error: ${error.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;