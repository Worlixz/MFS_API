const { Cours } = require('../db/sequelize')
const { Op } = require('sequelize')

module.exports = (app) => {
    app.get('/api/courses', (req, res) => {
        Cours.findAll({
            attributes: ['title', 'slug', 'resume', 'author', 'premium', 'date', 'picture_SD']
        })
        .then(cours => {
            const message = "La liste des pokemons a bien été récupérée."
            res.send(cours)
        })
        .catch( err => {
            const message = "La liste des pokémons n'a pas pu être récupérer. Réessayer dans quelques instants !"
            res.status(500).json({message, data : err})
        })
    })
}