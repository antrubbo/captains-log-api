const express = require("express")
const logs = express.Router()
const logsArray = require("../../models/log.js")

logs.get("/", (req, res) => {
    const allLogs = logsArray.map((log, index) => `<li><a href="/v2/logs/${index}">${log.title}</a></li>`)
    // const iterator = logsArray.values();
    // for(entry of iterator){
    //     return `<li><a href="/v2/logs/:index">${entry.title}</a></li>`
    // }
    res.send(`
        <ul>
            ${allLogs}
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