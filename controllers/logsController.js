const express = require("express")
const logs = express.Router()
const logsArray = require("../models/log.js")

logs.get("/", (req, res) => {
    const { order, mistakes, lastCrisis } = req.query
    switch (order) {
        case "asc" :
            res.json(logsArray.sort((a, b) => {
                const aLower = a.captainName.toLowerCase()
                const bLower = b.captainName.toLowerCase()
                if (aLower < bLower) {
                    return -1;
                }
                if (aLower > bLower) {
                    return 1;
                }
                return 0;
            }))
        break;
        case "dsc" :
            res.json(logsArray.sort((a, b) => {
                const aLower = a.captainName.toLowerCase()
                const bLower = b.captainName.toLowerCase()
                if (bLower < aLower) {
                    return -1;
                }
                if (bLower > aLower) {
                    return 1;
                }
                return 0;
            }))
        break;
    }

    switch (mistakes) {
        case "true" :
            res.json(logsArray.filter(log => {
                return log.mistakesWereMadeToday === true
            }))
        break;
        case "false" :
            res.json(logsArray.filter(log => {
                return log.mistakesWereMadeToday === false
            }))
        break;
    }

    switch (lastCrisis) {
        case "gt10" :
            res.json(logsArray.filter(log => {
                return log.daysSinceLastCrisis > 10
            }))
        break;
        case "gte20" :
            res.json(logsArray.filter(log => {
                return log.daysSinceLastCrisis >= 20
            }))
        break;
        case "lte5" :
            res.json(logsArray.filter(log => {
                return log.daysSinceLastCrisis <= 5
            }))
        break;
    }
})

module.exports = logs