const { Cours } = require('../../db/sequelize')
const { Op } = require('sequelize')

module.exports = (app) => {
    app.get('/api/dashboard/cours', (req, res) => {
        const message = "test"
        res.json({message})
    })
}