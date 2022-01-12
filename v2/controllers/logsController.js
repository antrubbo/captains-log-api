const express = require("express")
const logs = express.Router()
const logsArray = require("../../models/log.js")

logs.get("/", (req, res) => {
    const allLogs = logsArray.map((log, index) => `<li><a href="/v2/logs/${index}">${log.title}</a></li>`)
    res.send(`
        <ul>
            ${allLogs.join("")}
        </ul>
    `)
})

logs.get("/:index", (req, res) => {
    const { index } = req.params
    res.send(`
        <h1>${logsArray[index].title}</h1>
        <p>${logsArray[index].post}</p>
        <button><a style="text-decoration: none" href="/v2/logs">All Logs</a></button>
    `)
})

module.exports = logs