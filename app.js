const express = require('express')

const PORT = 8000

const app = express()

app.get('/', (req, res) => {
    res.json('Hello API')
})


app.listen(PORT, () => {
    console.log(`le serveur API est lancé sur le port : ${PORT}`)
})