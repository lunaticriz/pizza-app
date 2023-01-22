const express = require("express");
const app = express();
require('dotenv/config');
const mongoose = require("mongoose");
require('./routes/api')(app);

// Connection Database
mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URL, (err) => {
  if(err) throw err;
  console.log('Connection established....');
})

//Server listen
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is running on the port ${port}`);
});
