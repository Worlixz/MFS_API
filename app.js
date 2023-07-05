const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const { seqAuth, initDb } = require('./src/db/sequelize')
let cours = require('./src/db/mock-cours')

// ajout de la librairie Sharp.js pour redimmensionner les photos pour les rendre beaucoup plus lègre

const app = express()
const PORT = 8000

initDb()

app
    .use(cors())
    .use(bodyParser.json())

app.get('/', (req, res) => {
    res.json('Hello MFS API')
    const token = req.headers.bearer
})

/* Routes pour les cours */
require('./src/routes/findAllCours')(app)
require('./src/routes/findCoursBySlug')(app)

/* Routes pour les articles */

/* Routes Dashboard */
require('./src/routes/routesDashboard/dashboard')(app)
require('./src/routes/routesDashboard/findAllCoursOnDashboard')(app)
require('./src/routes/routesDashboard/findAllArticlesOnDashboard')(app)

/* Routes de connexion */
require('./src/routes/login')(app)


/* Routes vérification */
require('./src/routes/verification')(app)




app.listen(PORT, () => {
    console.log(`le serveur API est lancé sur le port : ${PORT}`)
})