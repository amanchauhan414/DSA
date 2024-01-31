// server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb://amanchauhancl1:5ic9lAy38ndT5bjd@ac-fhlhmn4-shard-00-00.otuqahj.mongodb.net:27017,ac-fhlhmn4-shard-00-01.otuqahj.mongodb.net:27017,ac-fhlhmn4-shard-00-02.otuqahj.mongodb.net:27017/?ssl=true&replicaSet=atlas-6kblv1-shard-0&authSource=admin&retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Routes
const questionRoutes = require('./routes/questions');
app.use('/api/questions', questionRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
