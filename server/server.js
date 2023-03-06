require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const athleteRoutes = require("./routes/Athlete");
const matchRoutes = require("./routes/Match");
const userRoutes = require("./routes/User");
const infoRoutes = require("./routes/Info");

//creates express app
const app = express();

app.use(express.json());

//routes
app.use("/api/athletes", athleteRoutes);
app.use("/api/matches", matchRoutes);
app.use("/api/user", userRoutes);
app.use("/api/info", infoRoutes);

//connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    //listen for requests
    app.listen(4000, () => {
      console.log("connected to db and listening on localhost:4000");
    });
  })
  .catch((error) => {
    console.log(error);
  });
