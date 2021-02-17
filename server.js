const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-Parser');

//middleware 
app.use(bodyParser.json());

//import route 
const signinRoute = require('./routes/signinPost');
app.use('/signin', signinRoute);


app.get('/',(req,res)=>{
    res.json("Hello you are at home page Goto to /signin for login");
});

//Connect to DB
mongoose.connect(
    "mongodb://localhost:27017/SigninDB",
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (!err) {
      console.log("Database connection successful");
    } else {
      console.log("Error in connecting with database :" + err);
    }
  }
);

//Server is running at 3000 port
app.listen(3000,(req,res)=>{
    console.log("Server is running at 3000");
});