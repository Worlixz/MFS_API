const { Cours } = require('../db/sequelize')
const { Op } = require('sequelize')

module.exports = (app) => {
    app.get("/api/cours/:id", (req, res) => {
        const id = req.params.id
        Cours.findOne({ where : { slug : id}})
        .then(cours => {
            const message = "Un cours à été trouvé"
            res.send(cours)
        })
        .catch( err => {
            const message = "La liste des pokémons n'a pas pu être récupérer. Réessayer dans quelques instants !"
            res.status(500).json({message, data : err})
        })
    })
}