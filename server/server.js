require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
<<<<<<< HEAD
const athleteRoutes = require("./routes/Athletes");
=======
const athleteRoutes = require("./routes/Athlete");
const matchRoutes = require("./routes/Match");
const userRoutes = require("./routes/User");
>>>>>>> dafe083 (added user routes and changed a few api routes since get requests cant have a body)

//creates express app
const app = express();

app.use(express.json());
app.use((req, res, next) => {
<<<<<<< HEAD
  console.log(req.path, req.method);
=======
  // console.log(req.path, req.method, '\n', req.body);
>>>>>>> dafe083 (added user routes and changed a few api routes since get requests cant have a body)
  next();
});

//routes
app.use("/api/athletes", athleteRoutes);
<<<<<<< HEAD
=======
app.use("/api/matches", matchRoutes);
app.use("/api/user", userRoutes);
>>>>>>> dafe083 (added user routes and changed a few api routes since get requests cant have a body)

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
