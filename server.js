const express = require("express");
const dotenv = require("dotenv").config();
const db = require("./db");
const routes = require("./routes");
const cors = require("cors");
const Places = require("./models/Places");

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api", routes);
db.on("error", console.error.bind(console, "MongoDb connection error"));

app.put("/api/places/update", async(req, res)=>{
  const newName = req.body.newName;
  const id = req.body.id;

  try{
    await Places.findById(id, (error, cityUpdate)=> {
      cityUpdate.name = newName;
      cityUpdate.save();
    });
  }catch (err) {
    console.log(err)
  }
  res.send("updated")
})

app.listen(PORT, () => {
  console.log(`App listening on port: ${PORT}`);
});
