const express = require('express');
const app = express();
const firebase = require('firebase/app');
// const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const port = 8888;
const cors = require('cors');
app.use(cors());
// const connection_string='mongodb://localhost:27017/';

// // connect to MongoDB
// // Connect to MongoDB (make sure to adjust the URI)
// mongoose.connect(connection_string, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// });

//middleware to parse JSON
app.use(express.json());

// use user routes
app.use('/users', userRoutes); // API base route for user routes


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
