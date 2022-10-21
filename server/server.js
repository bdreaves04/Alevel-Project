require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
<<<<<<< HEAD
const athleteRoutes = require("./routes/Athletes");
=======
const athleteRoutes = require("./routes/Athlete");
const matchRoutes = require("./routes/Match");
const userRoutes = require("./routes/User");

//creates express app
const app = express();

app.use(express.json());

//routes
app.use("/api/athletes", athleteRoutes);
<<<<<<< HEAD
=======
app.use("/api/matches", matchRoutes);
app.use("/api/user", userRoutes);

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
