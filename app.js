const express = require("express")
// const logsController = require("./controllers/logsController.js")
const logsController = require("./v2/controllers/logsController.js")
const app = express()

app.use(express.json()) // Parse incoming JSON

// app.use("/logs", logsController)
app.use("/v2/logs", logsController)

app.get("/", (req, res) => {
    res.send("Welcome to the Captain's Log!")
})

app.get("*", (req, res) => {
    res.status(404).json({error: "Page not found"})
})

module.exports = app