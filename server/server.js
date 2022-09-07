const express = require('express')
require('dotenv').config()

//creates express app
const app = express()

app.use((req, res, next) => {
    console.log(req.path, req.method)
})

app.get('/', (req, res) => {
    res.json({mssg: 'welcome to the app'})
})

//listen for requests
app.listen(process.env.PORT, () => {
    console.log("listening on port ",process.env.PORT)
})