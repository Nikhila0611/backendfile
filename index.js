const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRouter = require('./routes/authRouter');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3002;




app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/api', authRouter);

const uri='mongodb+srv://nikhilareddygandlapati:yGKYQjwMOlgTODLR@cluster0.u7lsxfr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(uri, {   
  // useNewUrlParser: true,
  // useUnifiedTopology: true,

  
  });
const db = mongoose.connection;
db.on('error', (error) => {
  console.error('Error connecting to MongoDB Atlas with Mongoose:', error);
});
db.once('open', () => {
  console.log('Connected to MongoDB Atlas with Mongoose');
});

// mongoose.connect('mongodb://localhost:27017/registration', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
// const db = mongoose.connection;
// db.on('error', (error) => console.error('MongoDB connection error:', error));
// db.once('open', () => console.log('Connected to Database'));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});