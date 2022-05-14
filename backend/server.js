const path = require('path');
const express = require('express');
const dotenv = require('dotenv').config();
const colors = require('colors');
const port = process.env.PORT || 8000;
const errorHandler = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/posts', require('./routes/postRoutes'));

// Serve Frontend
if (process.env.NODE_ENV === 'production') {
  // Set build folder as static
  app.use(express.static(path.join(__dirname, '../frontend/build')));

  app.get('*', (req, res) =>
    res.sendFile(path.join(__dirname, '../frontend/build/index.html'))
  );
} else {
  app.get('/', (req, res) =>
    res
      .status(200)
      .json({ message: "Welcome to Daniel's Personal Blog App API" })
  );
}

app.use(errorHandler);

app.listen(port, () => console.log(`Server started on PORT ${port}`));
