const validateLog = (req, res, next) => {
    const newLog = req.body
    if(typeof newLog.captainName !== "string" || typeof newLog.title !== "string" || typeof newLog.post !== "string" || typeof newLog.mistakesWereMadeToday !== "boolean" || typeof newLog.daysSinceLastCrisis !== "number"){
        res.json({error: "Invalid datatype!"})
    }
    next()
}

module.exports = { validateLog }