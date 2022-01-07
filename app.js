const express = require("express")
const logsController = require("./controllers/logsController.js")
const app = express()

app.use("/logs", logsController)

app.get("/", (req, res) => {
    res.send("Welcome to the Captain's Log!")
})

module.exports = app