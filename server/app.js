const express = require('express');
const app = express();
const firebase = require('firebase/app');
const userRoutes = require('./routes/userRoutes');
const taskRoutes = require('./routes/taskRoutes');
const port = 8888;
const cors = require('cors');
app.use(cors());


//middleware to parse JSON
app.use(express.json());

// use user routes
app.use('/users', userRoutes);

// use task routes
app.use('/tasks', taskRoutes);


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
