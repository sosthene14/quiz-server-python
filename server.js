require('dotenv').config()
const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
const cors = require("cors");
app.use(cors());
const listenPort = 5010 || 3000;
const mongoUrl = process.env.MONGO_URL;

  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
  });
mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("connecté");
  })
  .catch((e) => console.log(e));

require("./schema_mongo");
const files = mongoose.model(process.env.DB_NAME);
 

app.get("/get-score-datas", async (req, res) => {
    try {
      await files.find({}).then((data) => {
        res.send({ data: data });
        console.log(data);  
      });
    } catch (error) {
      res.send({ status: "erreur" });
    } 
  });  

  
app.listen(listenPort, () => {
  console.log("server started port "+listenPort); 
});

