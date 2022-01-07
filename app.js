const express = require("express")
const app = express()

app.get("/", (req, res) => {
    res.send("Welcome to the Captain's Log!")
})

module.exports = app