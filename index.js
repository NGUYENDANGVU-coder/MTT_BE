const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const routes = require("./src/routes");

dotenv.config();
const app = express();
const port = 3001;
//CORS
app.use(function (req, res, next) {
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type, Accept,Authorization,Origin"
  );
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

app.get('/',(req,res)=>{
    res.json("123")
})
routes(app)
mongoose.connect(`mongodb+srv://vunho1239999:${process.env.MONGODB_PASS}@cluster0.laa938a.mongodb.net/?retryWrites=true&w=majority`)
.then(()=>{
    console.log('connect sucessfully');
})
.catch((err)=>{
    console.log(err);
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
