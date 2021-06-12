const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
const routes  = require("./routes");
const bodyParser = require("body-parser")

// load secrets to environment variables
require('dotenv').config();
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every request to the React app
// Define any API routes before this runs
// mongoose.connect(process.env.MONGODB_URL || "mongodb://localhost/budget", {
//   useNewUrlParser: true,
//   useFindAndModify: false
// });

mongoose.connect(process.env.MONGODB_URL || "mongodb://localhost/budget",{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
}).then(()=>{
   console.log(`connection to database established`)
}).catch(err=>{
   console.log(`db error ${err.message}`);
   process.exit(-1)
})

mongoose.connection.on('connected',() =>{
  console.log('Mongoose is connected!!')
})

mongoose.connection.on('error',() =>{
  console.log('Mongoose is not connected!!', err)
})

app.use(routes)

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

