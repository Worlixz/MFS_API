const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    const token = req.headers.bearer

    if(!token){
        const message = "Vous n'avez pas de token d'authentification"
        return status(401).json({ message })
    }

    const decodedToken = jwt.verify(token, process.env.PRIVATE_KEY, (error, decodedToken) => {
        if(error){
            const message = "Vous ne pouvez pas accéder à cette ressource"
            return res.status(401).json({ message, data: error})
        }

        const userId = decodedToken.userId
        if(req.body.userId && req.body.userId !== userId){
            const message = "L'identification est invalid"
            return res.status(401).json({ message })
        }else{
            next()
        }
    })
}