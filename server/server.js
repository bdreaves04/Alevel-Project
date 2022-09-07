require('dotenv').config()
const express = require('express')
const athleteRoutes = require('./routes/athletes')

//creates express app
const app = express()

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/athletes', athleteRoutes)

//listen for requests
app.listen(process.env.PORT, () => {
    console.log("listening on port ",process.env.PORT)
})