const express = require('express')
const cors = require('cors')
let cours = require('./src/db/mock-cours')

const app = express()
const PORT = 8000

app.use(cors())

app.get('/', (req, res) => {
    res.json('Hello MFS API')
})

app.get('/api/cours', (req, res) => {
    res.send(cours)
})


app.listen(PORT, () => {
    console.log(`le serveur API est lancé sur le port : ${PORT}`)
})