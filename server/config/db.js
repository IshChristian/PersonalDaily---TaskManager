const mongoose = require('mongoose');
const connection_string='mongodb+srv://freecodecamp:NlWqoMT0sY4Q1ifi@cluster0.0yqvghe.mongodb.net/PersonalDaily?retryWrites=true&w=majority';
const connectDB = async () => {
    try {
        await mongoose.connect(connection_string, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDb Connected');
    } catch (err) {
        console.error('MongoDb Connection error:', err.message);
        process.exist(1);
    }
};

module.exports = connectDB;