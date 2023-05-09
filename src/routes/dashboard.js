const auth = require('../auth/auth')

module.exports = (app) => {
    app.get("/api/dashboard",auth, (req, res) => {
        const message = "je suis co !! "
        res.json({message})
    })
}