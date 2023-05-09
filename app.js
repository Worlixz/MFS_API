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
    console.log(token)
})

app.get('/api/cours', (req, res) => {
    res.send(cours)
})

require('./src/routes/findAllCours')(app)
require('./src/routes/login')(app)
require('./src/routes/dashboard')(app)



app.listen(PORT, () => {
    console.log(`le serveur API est lancé sur le port : ${PORT}`)
})