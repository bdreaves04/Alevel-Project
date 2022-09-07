require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const athleteRoutes = require("./routes/athletes");

//creates express app
const app = express();

app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.use("/api/athletes", athleteRoutes);

//connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    //listen for requests
    app.listen(process.env.PORT, () => {
      console.log("connected to db and listening on localhost:"+process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
