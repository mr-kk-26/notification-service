const express = require("express");

const app = express();
app.use(bodyParser.json);
app.use(bodyParser.urlencoded({extended: true}));






app.listen(8080, ()=>{
  console.log("serveer strated")
})
